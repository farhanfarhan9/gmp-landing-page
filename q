[1mdiff --git a/src/app/ourproject.tsx b/src/app/ourproject.tsx[m
[1mindex 45987ba..0da758e 100644[m
[1m--- a/src/app/ourproject.tsx[m
[1m+++ b/src/app/ourproject.tsx[m
[36m@@ -6,7 +6,7 @@[m [mfunction OurProject() {[m
     <>[m
       <div id="service" className="mb-2">[m
         <div className="hidden xl:flex">[m
[31m-          <section className="max-w-7xl mx-auto">[m
[32m+[m[32m          <section className="mx-auto max-w-7xl">[m
             <div className="grid grid-cols-3 gap-4">[m
               <div>[m
                 <Image[m
[36m@@ -38,9 +38,9 @@[m [mfunction OurProject() {[m
                     src="/porto31.png"[m
                     alt=""[m
                   />[m
[31m-                  {/* <div className="absolute left-0 right-0 top-0 bottom-0 bg-blue-600 opacity-30"></div> */}[m
[31m-                  <div className="absolute top-0 bottom-0 right-0 left-0">[m
[31m-                    <div className="flex justify-center h-full items-center">[m
[32m+[m[32m                  {/* <div className="absolute top-0 bottom-0 left-0 right-0 bg-blue-600 opacity-30"></div> */}[m
[32m+[m[32m                  <div className="absolute top-0 bottom-0 left-0 right-0">[m
[32m+[m[32m                    <div className="flex items-center justify-center h-full">[m
                       <button className="hover:scale-110">[m
                         <ModalVideo videoUrl="https://www.youtube.com/embed/CzEVDupsta0">[m
                           <svg[m
[36m@@ -96,8 +96,8 @@[m [mfunction OurProject() {[m
             </div>[m
           </section>[m
         </div>[m
[31m-        <div className="xl:hidden flex-row">[m
[31m-          <section className="max-w-7xl mx-4">[m
[32m+[m[32m        <div className="flex-row xl:hidden">[m
[32m+[m[32m          <section className="mx-4 max-w-7xl">[m
             <div className="grid grid-cols-2 grid-rows-2 gap-4">[m
               <div>[m
                 <Image[m
[36m@@ -128,9 +128,9 @@[m [mfunction OurProject() {[m
                   src="/porto4_mobile.png"[m
                   alt=""[m
                 />[m
[31m-                {/* <div className="absolute left-0 right-0 top-0 bottom-0 bg-blue-600 opacity-30"></div> */}[m
[31m-                <div className="absolute top-0 bottom-0 right-0 left-0">[m
[31m-                  <div className="flex justify-center h-full items-center">[m
[32m+[m[32m                {/* <div className="absolute top-0 bottom-0 left-0 right-0 bg-blue-600 opacity-30"></div> */}[m
[32m+[m[32m                <div className="absolute top-0 bottom-0 left-0 right-0">[m
[32m+[m[32m                  <div className="flex items-center justify-center h-full">[m
                     <button className="hover:scale-110">[m
                       <ModalVideo videoUrl="https://www.youtube.com/embed/i9hKwHR4Mx0">[m
                         <svg[m
[36m@@ -180,9 +180,9 @@[m [mfunction OurProject() {[m
                   src="/porto312_mobile.png"[m
                   alt=""[m
                 />[m
[31m-                {/* <div className="absolute left-0 right-0 top-0 bottom-0 bg-blue-600 opacity-30"></div> */}[m
[31m-                <div className="absolute top-0 bottom-0 right-0 left-0">[m
[31m-                  <div className="flex justify-center h-full items-center">[m
[32m+[m[32m                {/* <div className="absolute top-0 bottom-0 left-0 right-0 bg-blue-600 opacity-30"></div> */}[m
[32m+[m[32m                <div className="absolute top-0 bottom-0 left-0 right-0">[m
[32m+[m[32m                  <div className="flex items-center justify-center h-full">[m
                     <button className="hover:scale-110">[m
                       <ModalVideo videoUrl="https://www.youtube.com/embed/CzEVDupsta0">[m
                         <svg[m
[36m@@ -229,7 +229,7 @@[m [mfunction OurProject() {[m
       </div>[m
       <div id="service" className="mb-2">[m
         <div className="hidden xl:flex">[m
[31m-          <section className="max-w-7xl mx-auto">[m
[32m+[m[32m          <section className="mx-auto max-w-7xl">[m
             <div className="grid grid-cols-3 gap-4">[m
               <div>[m
                 <Image[m
[36m@@ -251,9 +251,9 @@[m [mfunction OurProject() {[m
                     src="/porto33.png"[m
                     alt=""[m
                   />[m
[31m-                  {/* <div className="absolute left-0 right-0 top-0 bottom-0 bg-blue-600 opacity-30"></div> */}[m
[31m-                  <div className="absolute top-0 bottom-0 right-0 left-0">[m
[31m-                    <div className="flex justify-center h-full items-center">[m
[32m+[m[32m                  {/* <div className="absolute top-0 bottom-0 left-0 right-0 bg-blue-600 opacity-30"></div> */}[m
[32m+[m[32m                  <div className="absolute top-0 bottom-0 left-0 right-0">[m
[32m+[m[32m                    <div className="flex items-center justify-center h-full">[m
                       <button className="hover:scale-110">[m
                         <ModalVideo videoUrl="https://www.youtube.com/embed/i9hKwHR4Mx0">[m
                           <svg[m
[36m@@ -319,8 +319,8 @@[m [mfunction OurProject() {[m
             </div>[m
           </section>[m
         </div>[m
[31m-        <div className="xl:hidden flex-row">[m
[31m-          <section className="max-w-7xl mx-4">[m
[32m+[m[32m        <div className="flex-row xl:hidden">[m
[32m+[m[32m          <section className="mx-4 max-w-7xl">[m
             <div className="grid grid-cols-2 grid-rows-2 gap-4">[m
               <div>[m
                 <Image[m
[36m@@ -368,7 +368,7 @@[m [mfunction OurProject() {[m
       </div>[m
       <div id="service">[m
         <div className="hidden xl:flex">[m
[31m-          <section className="max-w-7xl mx-auto">[m
[32m+[m[32m          <section className="mx-auto max-w-7xl">[m
             <div className="grid grid-cols-3 gap-4">[m
               <div>[m
                 <Image[m
[36m@@ -390,9 +390,9 @@[m [mfunction OurProject() {[m
                     src="/oil-thumbnail.png"[m
                     alt=""[m
                   />[m
[31m-                  {/* <div className="absolute left-0 right-0 top-0 bottom-0 bg-blue-600 opacity-30"></div> */}[m
[31m-                  <div className="absolute top-0 bottom-0 right-0 left-0">[m
[31m-                    <div className="flex justify-center h-full items-center">[m
[32m+[m[32m                  {/* <div className="absolute top-0 bottom-0 left-0 right-0 bg-blue-600 opacity-30"></div> */}[m
[32m+[m[32m                  <div className="absolute top-0 bottom-0 left-0 right-0">[m
[32m+[m[32m                    <div className="flex items-center justify-center h-full">[m
                       <button className="hover:scale-110">[m
                         <ModalVideo videoUrl="https://www.youtube.com/embed/blXNITtzSjM">[m
                           <svg[m
[36m@@ -457,8 +457,8 @@[m [mfunction OurProject() {[m
             </div>[m
           </section>[m
         </div>[m
[31m-        <div className="xl:hidden flex-row">[m
[31m-          <section className="max-w-7xl mx-4">[m
[32m+[m[32m        <div className="flex-row xl:hidden">[m
[32m+[m[32m          <section className="mx-4 max-w-7xl">[m
             <div className="grid grid-cols-2 grid-rows-2 gap-4">[m
               <div className="relative">[m
                 <Image[m
[36m@@ -469,9 +469,9 @@[m [mfunction OurProject() {[m
                   src="/oil-thumbnail.png"[m
                   alt=""[m
                 />[m
[31m-                {/* <div className="absolute left-0 right-0 top-0 bottom-0 bg-blue-600 opacity-30"></div> */}[m
[31m-                <div className="absolute top-0 bottom-0 right-0 left-0">[m
[31m-                  <div className="flex justify-center h-full items-center">[m
[32m+[m[32m                {/* <div className="absolute top-0 bottom-0 left-0 right-0 bg-blue-600 opacity-30"></div> */}[m
[32m+[m[32m                <div className="absolute top-0 bottom-0 left-0 right-0">[m
[32m+[m[32m                  <div className="flex items-center justify-center h-full">[m
                     <button className="hover:scale-110">[m
                       <ModalVideo videoUrl="https://www.youtube.com/embed/blXNITtzSjM">[m
                         <svg[m
