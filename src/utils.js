import {
    collection,
    addDoc,
    setDoc,
    doc,
    deleteDoc,
    query,
    where,
    getDocs,
    serverTimestamp,
} from '@firebase/firestore';
import db from "./firebase"

export const handleNew = async () => {
    const name = prompt('Enter name');
    const value = prompt('Enter value');
    const collectionRef = collection(db, 'colors');
    const payload = { name, value, timestamp: serverTimestamp() }
    const docRef = await addDoc(collectionRef, payload)
};

export const handleEdit = async (id) => {
    const name = prompt('Enter name');
    const value = prompt('Enter value');

    const docRef = doc(db, 'colors', id);
    const payload = { name, value }
    setDoc(docRef, payload);
};

export const handleDelete = async (id) => {
    const docRef = doc(db, 'colors', id);
    await deleteDoc(docRef);
};

export const handleQueryDelete = async (id) => {
    const userInputName = prompt('Enter name');

    const collectionRef = collection(db, 'colors');
    const q = query(collectionRef, where("name", "==", userInputName));
    const snapshot = await getDocs(q);

    const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    results.forEach(async result => {
        const docRef = doc(db, 'colors', result.id);
        await deleteDoc(docRef)

    })
}