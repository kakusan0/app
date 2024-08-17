import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">test</h1>
      <form method="POST">
        番号入力 <input type="text" name="Postal_district_number" />
        -<input type="text" name="Town_area_number" />
        <button type="submit" value="検索" />
      </form>
    </div>
  );
}
