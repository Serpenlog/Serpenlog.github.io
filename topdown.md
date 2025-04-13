# Top Down Modeling: Bike Phone Holder

## Top Down Modeling:
Top-down modeling is a CAD design approach where you start by creating a master layout or reference geometry that defines the overall structure, then build individual components based on that shared framework.

In this project, top-down modeling allowed for seamless integration between the different parts of the bike phone holder — from the handlebar clamp and rotating detent mechanism to the phone mounting plate.
I began by modeling the handlebar, then with that I modeled the clamp around it, separating it into two parts, then designing the part that holds the detent mechanism, then the detent mechanism itself, then the part that holds the phone.
By referencing common geometry (like hole placements, mating faces, and alignment axes), I could ensure that each part fit together precisely, even as the design evolved.
This approach not only reduced the chance of misalignment between parts, but also made it easier to make global design changes — like tweaking the tolerance of the clamp to the handlebar or the diameter for the screw holes and the heat set insert hole, while maintaining proper relationships throughout the assembly.

## Rationale Behind the Design:
For the rotation mechanism, I used a ball detent system that allows the phone to snap securely into place at 90-degree intervals — perfect for quickly switching between portrait and landscape orientations while riding. The mechanism uses a spring-loaded 4mm steel ball that fits into machined detents on a rotating plate, providing a satisfying click and reliable hold under motion and vibration. It works well in practice, offering both tactile feedback and firm positioning without the need for external locks or catches.

I did make a few adjustments to accommodate the realities of 3D printing: 
* I added a fillet of 0.5mm to the detent holes in order to make it easier to twist but it made it too loose when the weight of the phone put pressure on one side, so I printed two versions with 0.25mm fillet and without a fillet, since I designed my model to work while keeping it as small as possible it only took 20 minutes to print both of them with default PLA settings, and the version without fillet worked fine without making it too hard to twist the mechanism. 
* I also modified the phone holder itself to add a scretchy part on the corners which can hold the corners and keep the phone stationed without falling even if you were biking in a rough area. The original version had flaps that would hold the phone in place on the top, bottom and sides; this design kept the phone stable but if you were to shake the handlebars violently it would eventually fall off, the new version does not.

I used only FFF/FDM 3D printing in my project. I decided to do this even though I had access to pSLS 3D printing in order to be able to make modifications to any parts that might need a second version and also because I wanted to make this project using only accessible 3D printing methods to anyone who might want to make a similar project using their own printer. (I liked doing this project and I plan to do similar things outside of these projects and I can have personal access to a FFF/FDM printer but an SLS printer is far outside my budget)

## Assembly:
### Parts:
| Part | Material (if printed) |
| --- | --- |
| Handlebar | Not printed |
| Holder clamp bottom | TPU |
| Holder clamp top | PLA |
| Detent holder | PLA |
| Detent mechanism | PLA |
| Phone holder | TPU |
| Phone holder bars | TPU |
| Screws, heat set inserts, etc | Not printed |

<img src="images/bike_mount_assembly_top_parts.jpg" alt="bike_mount_assembly_top_parts" width="50%">
<img src="images/bike_mount_assembly_bot_parts.jpg" alt="bike_mount_assembly_bot_parts" width="50%">

1. Print all the parts and get everything together
2. Use a soldering iron or tool for heat set inserts to put the m3 heat set inserts in all the 4.5mm holes (if using a soldering iron, use a screw to slightly twist into the heat set insert to correct the angle while the insert is still hot)
3. Connect the holder clamp bottom and top together, put m3 screws from the holder clamp top to the bottom and tighten the screws. It sits tightly without moving already but by printing the bottom clamp with TPU it's even harder for it to move on the handlebar.
   
   <img src="images/bike_mount_assebly_clamps.jpg" alt="bike_mount_assembly1" width="50%">
   <img src="images/bike_mount_assembly_clamp_top.jpg" alt="bike_mount_assembly2" width="50%">

4. Connect the detent holder to the top clamp and insert the 4 m3 crews tighten them.

   <img src="images/bike_mount_assembly_detent_holder_screws.jpg" alt="bike_mount_assembly3" width="50%">

5. Place the detent mechanism twisted 90 degrees on top of the detent holder.
   
   <img src="images/bike_mount_assembly_detent_system1.jpg" alt="bike_mount_assembly4" width="50%">
   <img src="images/bike_mount_assembly_detent_system.jpg" alt="bike_mount_assembly5" width="50%">

   1. Place a 4mm ball into the open slots on the top and bottom of the detent holder. Let the steel balls rest against the detent holes of the detent mechanism and on top of the platform of the detent holder.
      
   <img src="images/bike_mount_assembly_detent_ball.jpg" alt="bike_mount_assembly6" width="50%">

   2. Insert springs into the slots, pushing the steel balls against the detent holes with one side of the spring and keeping it tightened with the wall of the detent holder.

   <img src="images/bike_mount_assembly_detent_spring.jpg" alt="bike_mount_assembly7" width="50%">

   3. Twist the detent mechanism so that the two flaps on either side now cover the open slots while the detent mechanism is not yet screwed in.
8. Insert an m3 screw of length at least 16mm into the hole in the middle of the detent mechanism, tighten it until it gets relatively difficult to tighten with an allen key. This will keep the detent mechanism in place and allow it to twist.

<img src="images/bike_mount_assembly_top_view.jpg" alt="bike_mount_assembly8" width="50%">
<img src="images/bike_mount_assembly_together1.jpg" alt="bike_mount_assembly9" width="50%">

   1. The detent mechanism is printed together with the cover for the detent system, so the system is only two parts. When the screw connecting the detent mechanism and the detent holder is tightened completely it will push the spring and lock it in place, this way even when the detent mechanism twists and temporarily leaves part of the spring open it will not fall out.
9. Connect the phone holder to the detent mechanism using m3 screws of 10mm or 12mm length.
   1. This will allow the screw to connect from the top of the phone holder (2mm thickness for phone holder's circular screw cavity) to the top of the detent mechanism (space between bottom of phone holder and top of detent mechanism depends on screw length of screw head, 3mm for my screw) and connect to the heat set inserts in the detent mechanism. The holes in the detent mechanism are 8mm long but right below the detent mechanism lies the head of the screws that connect the detent holder and the top clamp, so it's important that the screw doesn't go further than necessary while also minimizing the space between the phone holder and the detent mechanism.
11. Place phone in the phone holder, securing the flaps on the top, bottom and sides over the phone. Then twist the petal-like holes on the corners of the phone holder over the corners of the phone.
    1. Secure the phone holder bars on the top and bottom of the phone, securing the hooks on either side of the bars on the petal-like holes, this will increase the strength the phone holder has on the phone significantly while also making it possible for phones of different sizes to use the phone holder.
13. Twist the phone holder at 90 degree angles, when twisting the steel balls will lock into the detent hole whenever it can so that it looks in place.

## Generative Design Attempt:
I attempted to utilize generative design to optimize the phone holder part so that it uses the least amount of material while also maximizing the strength on the hold of the phone. I placed some theoretical forces on the phone holder itself and the detent mechanism which the whole model may experience as you are riding a bike. I then modified the preserve geometry and obstacle geometry and the manufacturing methods and other settings. However, I forgot to modify things like the materials and got some of the forces incorrect. This resulted in the image below, which shows a circle in the middle which represents the preserve geometry which will connect to the rest of the bike mount, then extending to the corners of the phone case and having something to hold the phone in the corners. Additionally, there is a bar at the top connecting the two top corners together for further strengthening the hold on the phone. Taking the result outputted by the generative design I modeled my the phone holder part itself to have the flaps on the sides just to provide some minimal hold on the phone since it wouldn't hurt but also made corner holders using a conic spline on each corner, then using a bar with a hook on the end to hold the corner areas together, this resulted in a holder for the phone which was unable to fall off no matter how much I tried.

<img src="images/bike_mount_generative_design.PNG" alt="bike_mount_gen_design" width="25%">

## Gallery:
<img src="images/bike_mount_main1.jpg" alt="bike_mount_main1" width="50%">
<img src="images/bike_mount_main2.jpg" alt="bike_mount_main2" width="50%">
<img src="images/bike_mount_main3.jpg" alt="bike_mount_main3" width="50%">
<img src="images/bike_mount_back1.jpg" alt="bike_mount_back1" width="50%">
<img src="images/bike_mount_bar1.jpg" alt="bike_mount_bar1" width="50%">
<img src="images/bike_mount_bar2.jpg" alt="bike_mount_bar2" width="50%">
<img src="images/bike_mount_bar3.jpg" alt="bike_mount_bar3" width="50%">
<img src="images/bike_mount_bar4.jpg" alt="bike_mount_bar4" width="50%">
<img src="images/bike_mount_bar5.jpg" alt="bike_mount_bar5" width="50%">
<img src="images/bike_mount_bar6.jpg" alt="bike_mount_bar6" width="50%">
<iframe src="https://giphy.com/embed/6cERrwuJLdPH6K0XlT" width="268" height="480" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/6cERrwuJLdPH6K0XlT">via GIPHY</a></p>
<iframe src="https://giphy.com/embed/rVHIRapbRwbiAHC3gW" width="268" height="480" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/rVHIRapbRwbiAHC3gW">via GIPHY</a></p>
### Cad Model:
<iframe src="https://vanderbilt643.autodesk360.com/g/shares/SH286ddQT78850c0d8a46f88249f9d41794b?mode=embed" width="640" height="480" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>