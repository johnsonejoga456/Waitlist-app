import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { sendConfirmationEmail } from "@/lib/mailer";
import { collection, addDoc, getDocs, orderBy, query, Timestamp } from "firebase/firestore";

export async function POST(req: Request) {
  try {
    const { name, email, course } = await req.json();

    if (!name || !email || !course) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Add to Firestore
    const docRef = await addDoc(collection(db, "waitlist"), {
      name,
      email,
      course,
      createdAt: Timestamp.now(),
    });

    // Send Configuration email
    await sendConfirmationEmail(email, name, course);

    return NextResponse.json({ message: "Successfully registered!", id: docRef.id }, { status: 201 });
  } catch (error) {
    console.error("Error adding to waitlist:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}


export async function GET() {
  try {
    const waitlistRef = collection(db, "waitlist");
    const q = query(waitlistRef, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);

    const waitlist = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return NextResponse.json({ waitlist }, { status: 200 });
  } catch (error) {
    console.error("Error fetching waitlist:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
