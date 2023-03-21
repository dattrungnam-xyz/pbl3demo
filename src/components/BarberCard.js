import React from "react";

import { listBarber } from "../assets/BarberStaff";

const BarberCard = () => {
  return (
    <div class="w-[full] h-[full] bg-gray-200 ">
      <img className=" w-full  " src='https://previews.dropbox.com/p/thumb/AB00JfIwDM0Yme3Fm9HFfT-c0o5NveVZA_9Boa9eH2iPyeNBXo57FHdZ7LXhuBVvtZTjnbozS7rOWm2WxnHSU7MgB89JDzQ-fwyuRWSrRlkIacuL-Vb9lyGgvCV6uBpKDw0jT8QSoRiz4OafcrLlTVBIMq5NaUReCeCjIHmIRrqZ9BE8azcbe1otH46y3dgd6t4NGc5AM3Rxc3AotL1P8qlY5l9At4QCVt05xcEYd2I9s1NKzWfYHnvvL9sFlGjKM-_PHa6T4n5LlL0g6ju1sZv9frT9oQ-z9GF1UnxuINQCEaiH8XubqeeU1GVky9AAMX_R7xDnZiBlb3HCgmBzyEifF5bjfZ0-gv0jaw0_IMTw2w9syMlRTP-qI7U62aSptvU/p.jpeg' alt=""/>
      <div className="text-center">
        <p className="text-base py-4 font-medium cursor-default">
          BARBER
        </p>
        <p className="text-2xl capitalize font-semibold cursor-default">
        Nguyễn Văn A
        </p>
       
        <p className=" my-4 underline cursor-pointer"> Xem chi tiết</p>
      </div>
    </div>
  );
};

export default BarberCard;
