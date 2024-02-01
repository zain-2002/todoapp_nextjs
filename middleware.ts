// import { authMiddleware,redirectToSignIn } from "@clerk/nextjs";
// import { NextResponse } from "next/server";

// export default authMiddleware({
//   // ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)"],
//   // publicRoutes: ['signin'],
//   // ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/signin"],
//   // debug: true

//   afterAuth(auth, req, evt) {
    
//     if (!auth.userId) {
//       const homeroute = new URL("/signin", req.url);
//       return NextResponse.redirect(homeroute);

//     }
//     if (auth.userId) {
//       const homeroute = new URL("/", req.url);
//       return NextResponse.redirect(homeroute);

//     }
  

//     return NextResponse.next(); 
  
//   }
// });

// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };

import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  
  debug: true,
  
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

