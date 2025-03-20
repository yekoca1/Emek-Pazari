"use client";

import { Avatar, Rating } from "@mui/material";
import { RxAvatar } from "react-icons/rx";

const Comments = ({ prd }: { prd: any }) => {
  //console.log(prd);
  return (
    <div className="border w-full md:w-1/3 p-2 rounded-lg my-3">
      {/* <Avatar image ={prd?.user?.image}/> */}
      <div className="flex items-center">
        <RxAvatar size="45" />
        <div>
          <div>{prd?.user?.name}</div>
        </div>
        <Rating name="half-rating-read" defaultValue={prd?.user?.rating} readOnly />
      </div>
      <div className="text-slate-500">
        {prd.comment}    {/*Eskiden yorum burada yazıyodu ama products içerisine comment değeri ekledim ; sadece lk ürüne*/}
      </div>
    </div>
  );
};

export default Comments;
