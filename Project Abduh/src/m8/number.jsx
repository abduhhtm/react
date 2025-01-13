import { useState } from 'react';
     
   export function Counter() {
         const [umur, setUmur] = useState(16); 
         function tambahUmur() {
      setUmur(umur + 1);
    }
        return <button onClick={tambahUmur}>Tambah Umur{umur}</button>;
    }

    

    