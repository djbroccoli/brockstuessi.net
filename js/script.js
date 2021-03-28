//Author: Brock Stuessi
//Date: 2/12/2020

{
  $(".text-box").hover(function(){
    $(this).find("p").toggleClass("hidden");
  })


}
{
  //Finding all target elements for the intersection Observer
  const MUSIC = document.getElementById("music");
  const ARCHIVES = document.getElementById("archives");
  const WRITING = document.getElementById("writing");
  const WEB = document.getElementById("web");

  const headerChanger = function (entries) {
    //modifys the header changer to the targeted element link
    let target = "#" + entries[0].target.id + "-link";
    console.log(target);
    //if intersecting, change the color to black
    if (entries[0].isIntersecting) {

      $(target).css({"color": "rgba(255,207,156,1)",
      "background-color": "black"});
    }
    //change link back to transparent if not intersecting
    else {
      $(target).css({"color": "black",
      "background-color": "transparent"});
    }
  };

  const observer = new IntersectionObserver(headerChanger, {
    threshold: 0.5,
  });

  observer.observe(MUSIC);
  observer.observe(ARCHIVES);
  observer.observe(WRITING);
  observer.observe(WEB);
}
