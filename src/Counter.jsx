import { useState } from "react";

function Counter() {
  const [angka, setAngka] = useState(0);

  return (
    <div>
      <p>Angka: {angka}</p>
      <button onClick={() => setAngka(angka + 1)}>Tambah</button>
      <button onClick={() => setAngka(angka - 1)}>Kurang</button>
    </div>
  );
}

export default Counter;
