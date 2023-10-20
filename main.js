$(document).ready(function () {
  $("#dropdown").click(function () {
    if ($("#dropdown-content").css("display") === "none") {
      $("#dropdown-content").css("display", "block");
      $("#arrow").html(
        '<i class="fas fa-angle-up ms-1" style="font-size:18px"></i>'
      );
    } else {
      $("#dropdown-content").css("display", "none");
      $("#arrow").html(
        '<i class="fas fa-angle-down ms-1" style="font-size:18px"></i>'
      );
    }
  });

  $(".whatsapp").click(function () {
    if ($(".popup").css("display") === "none") {
      $(".whatsapp").html('<i class="bi bi-x" style="font-size:33px;"></i>');
      $(".popup").css("display", "block");
    } else {
      $(".whatsapp").html(
        '<i class="bi bi-whatsapp mt-1" style="font-size: 25px;"></i>'
      );
      $(".popup").css("display", "none");
    }
  });

  const web_konten =

  $("#web").click(function () {
    $("#content").html(
      ` 
    <div class="img-line1 flex flex-col md:flex-row justify-center gap-5">
      <div class="img-1">
        <img src="https://media.discordapp.net/attachments/387127158935388160/1164988166130909284/img-1.png?ex=654536c7&is=6532c1c7&hm=f208fcff5c6132b0855e84b2300b0c68940af877f875737f2762a86c9b5ce48e&=&width=768&height=448" alt="1">
      </div>
      <div class="img-2 flex flex-col gap-5">
        <img src="https://media.discordapp.net/attachments/387127158935388160/1164988476056412350/img-2.png?ex=65453711&is=6532c211&hm=62bd2d8672b5f8b7b4421ee7bd06c5ebab1e13c4cd272c377481280a2bfb5a30&=&width=356&height=215" alt="2">
        <img src="https://media.discordapp.net/attachments/387127158935388160/1164988476333232188/img-3.png?ex=65453711&is=6532c211&hm=0d731404277a744835f099a15424295ec65ba6e300a16e245e0becae143cee23&=&width=356&height=208" alt="3">
      </div>
    </div>

    <div class="img-line2 flex lg:justify-center mt-5 gap-4 md:gap-6 lg:gap-8">
      <img class="hidden md:block" src="https://media.discordapp.net/attachments/387127158935388160/1164988476580708372/img-4.png?ex=65453711&is=6532c211&hm=a731ff30aa323996afc679980f1e9584ffb926511a9a105ff6cd76de82f74251&=&width=256&height=287" alt="4">
      <img class="hidden md:block" src="https://media.discordapp.net/attachments/387127158935388160/1164988476815593522/img-5.png?ex=65453711&is=6532c211&hm=a7ed12ba49be1e68e4cb1b4afe30b0d62b92d863cce3295457756f7c0a4fc4ec&=&width=256&height=287" alt="5">
      <img class="hidden md:block" src="https://media.discordapp.net/attachments/387127158935388160/1164988477092401162/img-6.png?ex=65453711&is=6532c211&hm=26bfa0b2bf682a7d593fdb3aed1b94ab7a6c2c86a8d8482623846903b017dc42&=&width=256&height=287" alt="6">
      <img class="hidden lg:block" src="https://media.discordapp.net/attachments/387127158935388160/1164988477377626273/img-7.png?ex=65453711&is=6532c211&hm=7db6d120126df9e179fcf5642088fb330476fb8ce432a4e7640ff025c91e1d35&=&width=256&height=287" alt="7">
    </div>    
     `
    );
  });

  $("#graphic").click(function () {
    $("#content").html(
      ` 
      <div class="img-line1 flex flex-col md:flex-row justify-center gap-5">
      <div class="img-1">
        <img src="https://media.discordapp.net/attachments/387127158935388160/1164989163242799164/img2-1.png?ex=654537b4&is=6532c2b4&hm=67a02dd53ef1554225bc8dcb70666caef80d9779a4e7c0444ce8e4f8f90e6a87&=&width=768&height=448" alt="1">
      </div>
      <div class="img-2 flex flex-col gap-5">
        <img src="https://media.discordapp.net/attachments/387127158935388160/1164989163528007720/img2-2.png?ex=654537b5&is=6532c2b5&hm=a2815d4a211442a91f30da787621ae231b69adf062cf88c54d17beb6b5499e71&=&width=356&height=215" alt="2">
        <img src="https://media.discordapp.net/attachments/387127158935388160/1164989163783852182/img2-3.png?ex=654537b5&is=6532c2b5&hm=ab75e01d9d7e582caaf0331d1070b56fbce852a9a4055ac9e46eb55386eb8d6b&=&width=356&height=208" alt="3">
      </div>
    </div>

    <div class="img-line2 flex lg:justify-center mt-5 gap-4 md:gap-6 lg:gap-8">
      <img class="hidden md:block" src="https://media.discordapp.net/attachments/387127158935388160/1164989164031324160/img2-4.png?ex=654537b5&is=6532c2b5&hm=5b9a67cf6ced3da049da7348f6b76a7b3b82dccbd96d84b7ddb5bdabde0e4508&=&width=256&height=287" alt="4">
      <img class="hidden md:block" src="https://media.discordapp.net/attachments/387127158935388160/1164989164551409736/img2-5.png?ex=654537b5&is=6532c2b5&hm=3a59619ebaa01a0a0cf75cd410dd5517994f263e4e3751013e73caa948ee2fe1&=&width=256&height=287" alt="5">
      <img class="hidden md:block" src="https://media.discordapp.net/attachments/387127158935388160/1164989165000212621/img2-6.png?ex=654537b5&is=6532c2b5&hm=aaab96b7ab40be51007b63a9fe668f691c908836fb860d0d92758a10c89d38c9&=&width=256&height=287" alt="6">
      <img class="hidden lg:block" src="https://media.discordapp.net/attachments/387127158935388160/1164989165339947228/img2-7.png?ex=654537b5&is=6532c2b5&hm=d515bb12540f65ecb66620f1f53b24224cec15da37f4f51a0e6d6f00868bcec6&=&width=256&height=287" alt="7">
    </div>     
     `
    );
  });

  $("#logo").click(function () {
    $("#content").html("logo");
  });

  $(document).ready(function () {
    $("#web").addClass("active-project-content");

    const navbarItems = $(".project-content > a");

    navbarItems.on("click", function () {
      navbarItems.removeClass("active-project-content");
      $(this).addClass("active-project-content");
    });
  });
});

