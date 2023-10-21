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

  $("#web").click(function () {
    $("#content").html(
      ` 
    <div class="img-line1 flex flex-col md:flex-row justify-center gap-5">
      <div class="img-1">
        <img class="cursor-pointer" id="img-1" src="https://media.discordapp.net/attachments/387127158935388160/1164988166130909284/img-1.png?ex=654536c7&is=6532c1c7&hm=f208fcff5c6132b0855e84b2300b0c68940af877f875737f2762a86c9b5ce48e&=&width=768&height=448" alt="1">
      </div>
      <div class="img-2 flex flex-col gap-5">
        <img class="cursor-pointer" id="img-2" src="https://media.discordapp.net/attachments/387127158935388160/1164988476056412350/img-2.png?ex=65453711&is=6532c211&hm=62bd2d8672b5f8b7b4421ee7bd06c5ebab1e13c4cd272c377481280a2bfb5a30&=&width=356&height=215" alt="2">
        <img class="cursor-pointer" id="img-3" src="https://media.discordapp.net/attachments/387127158935388160/1164988476333232188/img-3.png?ex=65453711&is=6532c211&hm=0d731404277a744835f099a15424295ec65ba6e300a16e245e0becae143cee23&=&width=356&height=208" alt="3">
      </div>
    </div>

    <div class="img-line2 flex sm:justify-center mt-5 gap-4 md:gap-6 lg:gap-8">
      <img id="img-4" class="hidden md:block cursor-pointer" src="https://media.discordapp.net/attachments/387127158935388160/1164988476580708372/img-4.png?ex=65453711&is=6532c211&hm=a731ff30aa323996afc679980f1e9584ffb926511a9a105ff6cd76de82f74251&=&width=256&height=287" alt="4">
      <img id="img-5" class="hidden md:block cursor-pointer" src="https://media.discordapp.net/attachments/387127158935388160/1164988476815593522/img-5.png?ex=65453711&is=6532c211&hm=a7ed12ba49be1e68e4cb1b4afe30b0d62b92d863cce3295457756f7c0a4fc4ec&=&width=256&height=287" alt="5">
      <img id="img-6" class="hidden md:block cursor-pointer" src="https://media.discordapp.net/attachments/387127158935388160/1164988477092401162/img-6.png?ex=65453711&is=6532c211&hm=26bfa0b2bf682a7d593fdb3aed1b94ab7a6c2c86a8d8482623846903b017dc42&=&width=256&height=287" alt="6">
      <img id="img-7" class="hidden lg:block cursor-pointer" src="https://media.discordapp.net/attachments/387127158935388160/1164988477377626273/img-7.png?ex=65453711&is=6532c211&hm=7db6d120126df9e179fcf5642088fb330476fb8ce432a4e7640ff025c91e1d35&=&width=256&height=287" alt="7">
    </div>    
     `
    );

    const modal = $("#modal");
    const isi_modal = $("#isi-modal");
    const navbar = $("#navbar");

    function showImage(imageUrl) {
      modal.css("display", "block");
      navbar.css("display", "none");
      isi_modal.html(`<img src="${imageUrl}" alt="">`);
    }

    const images = [
      "https://media.discordapp.net/attachments/387127158935388160/1165226435875713024/jersey.png?ex=654614af&is=65339faf&hm=19fe54a67d4d36fb5f1ca2ea326bdbaf36e13238e3be3b854c95bca67fc33d28&=&width=517&height=391",
      "https://media.discordapp.net/attachments/387127158935388160/1165226435447898162/creature.png?ex=654614af&is=65339faf&hm=31f29b4b26d5470b6fc7cd42b82caa40a68be71a1ef1a70ae77b732aed0673fe&=&width=581&height=387",
      "https://media.discordapp.net/attachments/387127158935388160/1165226436278370304/web-modal3.png?ex=654614af&is=65339faf&hm=15122cb23716ad89f9b0c3d3c1d0d297dc0e2b33f26a5b084df70222848caba3&=&width=517&height=388",
      "https://media.discordapp.net/attachments/387127158935388160/1165226433673703504/4.png?ex=654614ae&is=65339fae&hm=ff7b8d00d189b03d91ff7f388159121c07414edee1dcdec476a423bf829155db&=&width=558&height=420",
      "https://media.discordapp.net/attachments/387127158935388160/1165226434067972106/5.png?ex=654614ae&is=65339fae&hm=f91cda2eac11d14a0aa74915cc10fcac0cbc7dfb66a2c8b3a24246b4a35ecb07&=&width=531&height=398",
      "https://media.discordapp.net/attachments/387127158935388160/1165226434470629406/6.png?ex=654614ae&is=65339fae&hm=cd453b3e80a5d84d83ee8dc91c83f7eba24fc1492aa6a5b6a59c8da2ce32fc61&=&width=558&height=418",
      "https://media.discordapp.net/attachments/387127158935388160/1165226435045240892/7.png?ex=654614ae&is=65339fae&hm=1a207c543396d64e1f9e78fd44876290169ccccab30b1e4939c91ccdba947713&=&width=492&height=371",
    ];

    for (let i = 1; i <= 7; i++) {
      $(`#img-${i}`).on("click", function () {
        showImage(images[i - 1]);
      });
    }

    $("#close").on("click", function () {
      modal.css("display", "none");
      navbar.css("display", "block");
    });
  });

  $("#graphic").click(function () {
    $("#content").html(
      ` 
      <div class="img-line1 flex flex-col md:flex-row justify-center gap-5">
      <div class="img-1">
        <img id="graphic-1" class="cursor-pointer" src="https://media.discordapp.net/attachments/387127158935388160/1165254267393814649/image_4.png?ex=65462e9a&is=6533b99a&hm=b19e4b7ac1d6d24aadda75c0f53373348428fb9b1c56d9cd91853aaa6dca8633&=&width=766&height=448" alt="1">
      </div>
      <div class="img-2 flex flex-col gap-5">
        <img id="graphic-2" class="cursor-pointer" src="https://media.discordapp.net/attachments/387127158935388160/1165254267716784198/konten1_4.png?ex=65462e9a&is=6533b99a&hm=4e3f1abeec884651cdeee5957638d21fee3bbd0e36ff6d9af3c883e56f188ea8&=&width=356&height=215" alt="2">
        <img id="graphic-3" class="cursor-pointer" src="https://media.discordapp.net/attachments/387127158935388160/1165254268064903268/code_2.png?ex=65462e9a&is=6533b99a&hm=1430c8247d4e357c73fe713b97002d8ec4a21292dedf68d174e245f85485e6db&=&width=356&height=215" alt="3">
      </div>
    </div>

    <div class="img-line2 flex sm:justify-center mt-5 gap-4 md:gap-6 lg:gap-8 ">
      <img id="graphic-4" class="hidden md:block cursor-pointer" src="https://media.discordapp.net/attachments/387127158935388160/1165254268530479215/WhatsApp_Image_2023-10-18_at_08.45_3.png?ex=65462e9a&is=6533b99a&hm=5e4757988484dfe1ad2121c86ab8b3cc03faf406fd8958c1c192302e3655fe52&=&width=256&height=287" alt="4">
      <img id="graphic-5" class="hidden md:block cursor-pointer" src="https://media.discordapp.net/attachments/387127158935388160/1165254269352546344/posterpengajian-1_2.png?ex=65462e9b&is=6533b99b&hm=56e04a37fb085cf751da7a888389aafcbc6d699eb451ffd69937d81cf3f968ea&=&width=256&height=287" alt="5">
      <img id="graphic-6" class="hidden md:block cursor-pointer" src="https://media.discordapp.net/attachments/387127158935388160/1165259894430105641/WhatsApp_Image_2023-10-18_at_08.45_3.png?ex=654633d8&is=6533bed8&hm=a9d47afe646e9322be3efe53fda29c7fad3905e4f5a41a5fca940a56cee51ea4&=&width=256&height=287" alt="6">
      <img id="graphic-7" class="hidden lg:block cursor-pointer" src="https://media.discordapp.net/attachments/387127158935388160/1165254267116982292/sandford_2.png?ex=65462e9a&is=6533b99a&hm=fa5f67fa073634c380bdb47e7237d6a7c5ccf8ce6ad8c834cdb79e14c373a86c&=&width=256&height=287" alt="7">
    </div>     
     `
    );

  const modal = $("#modal");
  const isi_modal = $("#isi-modal");
  const navbar = $("#navbar");

  function showImage(imageUrl) {
    modal.css("display", "block");
    navbar.css("display", "none");
    isi_modal.html(`<img src="${imageUrl}" alt="">`);
  }

  const images = [
    "https://media.discordapp.net/attachments/387127158935388160/1165257977670946826/image_3.png?ex=6546320f&is=6533bd0f&hm=a31adc4e593f7576dbd160ba3c0d41c49bf6f9ef90e8bfbe77c3c80069879d11&=&width=407&height=545",
    "https://media.discordapp.net/attachments/387127158935388160/1165258574361010246/konten1_2.png?ex=6546329d&is=6533bd9d&hm=add1a8208b75d2023cf5e617ba60631add9359b1874576828100dba3b2e11716&=&width=408&height=511",
    "https://media.discordapp.net/attachments/387127158935388160/1165257977075343380/code_1.png?ex=6546320f&is=6533bd0f&hm=225a07222c3927d334bd1e40af36adf135cd9a466ae56f80694b485425852887&=&width=416&height=518",
    "https://media.discordapp.net/attachments/387127158935388160/1165257977402507354/WhatsApp_Image_2023-10-18_at_08.45_1.png?ex=6546320f&is=6533bd0f&hm=017711a84cf7696154d6bd8815f91ab8bcab5089811408ad152b892755d78c98&=&width=408&height=408",
    "https://media.discordapp.net/attachments/387127158935388160/1165257977935175690/posterpengajian-1_1.png?ex=6546320f&is=6533bd0f&hm=647ad6a05ffa4760108aebe9111fc1841f53c2bba961a69a415f689a03a4417e&=&width=425&height=423",
    "https://media.discordapp.net/attachments/387127158935388160/1165259894157496350/WhatsApp_Image_2023-10-18_at_08.45_2.png?ex=654633d8&is=6533bed8&hm=cda0c2d8d94cf4d596767e75ecf52a3fbbc93fea091a42b5795b664ca307020e&=&width=407&height=407",
    "https://media.discordapp.net/attachments/387127158935388160/1165257976773365931/sandford_1.png?ex=6546320f&is=6533bd0f&hm=b2b6757ed633a9b00ad993655403642a7e339e2feeaeef95a2225b7ea0ba52b5&=&width=412&height=515",
  ];

  for (let i = 1; i <= 7; i++) {
    $(`#graphic-${i}`).on("click", function () {
      showImage(images[i - 1]);
    });
  }

  $("#close").on("click", function () {
    modal.css("display", "none");
    navbar.css("display", "block");
  });
 
  });

  $("#logo").click(function () {
    $("#content").html(
      ` 
      <div class="img-line1 flex flex-col md:flex-row justify-center gap-5">
      <div class="img-1">
        <img id="logo-1" class="cursor-pointer" src="https://media.discordapp.net/attachments/387127158935388160/1164989163242799164/img2-1.png?ex=654537b4&is=6532c2b4&hm=67a02dd53ef1554225bc8dcb70666caef80d9779a4e7c0444ce8e4f8f90e6a87&=&width=768&height=448" alt="1">
      </div>
      <div class="img-2 flex flex-col gap-5">
        <img id="logo-2" class="cursor-pointer" src="https://media.discordapp.net/attachments/387127158935388160/1164989163528007720/img2-2.png?ex=654537b5&is=6532c2b5&hm=a2815d4a211442a91f30da787621ae231b69adf062cf88c54d17beb6b5499e71&=&width=356&height=215" alt="2">
        <img id="logo-3" class="cursor-pointer" src="https://media.discordapp.net/attachments/387127158935388160/1164989163783852182/img2-3.png?ex=654537b5&is=6532c2b5&hm=ab75e01d9d7e582caaf0331d1070b56fbce852a9a4055ac9e46eb55386eb8d6b&=&width=356&height=208" alt="3">
      </div>
    </div>

    <div class="img-line2 flex sm:justify-center mt-5 gap-4 md:gap-6 lg:gap-8 ">
      <img id="logo-4" class="hidden md:block cursor-pointer" src="https://media.discordapp.net/attachments/387127158935388160/1164989164031324160/img2-4.png?ex=654537b5&is=6532c2b5&hm=5b9a67cf6ced3da049da7348f6b76a7b3b82dccbd96d84b7ddb5bdabde0e4508&=&width=256&height=287" alt="4">
      <img id="logo-5" class="hidden md:block cursor-pointer" src="https://media.discordapp.net/attachments/387127158935388160/1164989164551409736/img2-5.png?ex=654537b5&is=6532c2b5&hm=3a59619ebaa01a0a0cf75cd410dd5517994f263e4e3751013e73caa948ee2fe1&=&width=256&height=287" alt="5">
      <img id="logo-6" class="hidden md:block cursor-pointer" src="https://media.discordapp.net/attachments/387127158935388160/1164989165000212621/img2-6.png?ex=654537b5&is=6532c2b5&hm=aaab96b7ab40be51007b63a9fe668f691c908836fb860d0d92758a10c89d38c9&=&width=256&height=287" alt="6">
      <img id="logo-7" class="hidden lg:block cursor-pointer" src="https://media.discordapp.net/attachments/387127158935388160/1164989165339947228/img2-7.png?ex=654537b5&is=6532c2b5&hm=d515bb12540f65ecb66620f1f53b24224cec15da37f4f51a0e6d6f00868bcec6&=&width=256&height=287" alt="7">
    </div>    
     `
    );

    const modal = $("#modal");
    const isi_modal = $("#isi-modal");
    const navbar = $("#navbar");
    const close = $("#close");
  
    function displayImage(imageUrl) {
      modal.css("display", "block");
      navbar.css("display", "none");
      isi_modal.html(`<img src="${imageUrl}" alt="">`);
    }
  
    const logos = [
      "https://media.discordapp.net/attachments/387127158935388160/1165235680922849370/1.png?ex=65461d4b&is=6533a84b&hm=caa78037aacbba143e22e02225b8112767b02e4cd2c45527e1fbe85eaa7ac160&=&width=690&height=517",
      "https://media.discordapp.net/attachments/387127158935388160/1165235679941378090/2.png?ex=65461d4b&is=6533a84b&hm=5cfd365a9508e9d339f9e1fe75b70fef2dc119023598c03b06d2e00e7eab6c45&=&width=465&height=465",
      "https://media.discordapp.net/attachments/387127158935388160/1165235680276910181/3.png?ex=65461d4b&is=6533a84b&hm=32d35b2bf101df4ed93cdf4f0b87e26b4485b23e7a26d9ab85d250c0906c2441&=&width=437&height=437",
      "https://media.discordapp.net/attachments/387127158935388160/1165235680650215454/4.png?ex=65461d4b&is=6533a84b&hm=480bb7cad1a26b2cc37a9f7d136d860cfaa0875808f2e2a90ddaffed8981c78f&=&width=495&height=495",
      "https://media.discordapp.net/attachments/387127158935388160/1165235681270972546/7.png?ex=65461d4b&is=6533a84b&hm=d31e199f0b44c731b862c5c72519943697d5169fc528fa84963d5ec9d2e36ae7&=&width=390&height=391",
      "https://media.discordapp.net/attachments/387127158935388160/1165235679584849960/5.png?ex=65461d4b&is=6533a84b&hm=28158246ee8fa5c5f08ff217a2e21dfa94017632c155fb49bb9da7f87896f55d&=&width=390&height=391",
      "https://media.discordapp.net/attachments/387127158935388160/1165235679224152084/6.png?ex=65461d4a&is=6533a84a&hm=34d94a39c582f18fed843dd16e132d244d6ff7105abb440b09a091f7015bc2d5&=&width=377&height=377"
    ];
  
    for (let i = 1; i <= 7; i++) {
      $(`#logo-${i}`).on("click", function () {
        displayImage(logos[i - 1]);
      });
    }
  
    close.on("click", function () {
      modal.css("display", "none");
      navbar.css("display", "block");
    });

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

function newWindow(url) {
  window.open(url, "_blank");
}

$(document).ready(function () {
  const modal = $("#modal");
  const isi_modal = $("#isi-modal");
  const navbar = $("#navbar");

  function showImage(imageUrl) {
    modal.css("display", "block");
    navbar.css("display", "none");
    isi_modal.html(`<img src="${imageUrl}" alt="">`);
  }

  const images = [
    "https://media.discordapp.net/attachments/387127158935388160/1165226435875713024/jersey.png?ex=654614af&is=65339faf&hm=19fe54a67d4d36fb5f1ca2ea326bdbaf36e13238e3be3b854c95bca67fc33d28&=&width=517&height=391",
    "https://media.discordapp.net/attachments/387127158935388160/1165226435447898162/creature.png?ex=654614af&is=65339faf&hm=31f29b4b26d5470b6fc7cd42b82caa40a68be71a1ef1a70ae77b732aed0673fe&=&width=581&height=387",
    "https://media.discordapp.net/attachments/387127158935388160/1165226436278370304/web-modal3.png?ex=654614af&is=65339faf&hm=15122cb23716ad89f9b0c3d3c1d0d297dc0e2b33f26a5b084df70222848caba3&=&width=517&height=388",
    "https://media.discordapp.net/attachments/387127158935388160/1165226433673703504/4.png?ex=654614ae&is=65339fae&hm=ff7b8d00d189b03d91ff7f388159121c07414edee1dcdec476a423bf829155db&=&width=558&height=420",
    "https://media.discordapp.net/attachments/387127158935388160/1165226434067972106/5.png?ex=654614ae&is=65339fae&hm=f91cda2eac11d14a0aa74915cc10fcac0cbc7dfb66a2c8b3a24246b4a35ecb07&=&width=531&height=398",
    "https://media.discordapp.net/attachments/387127158935388160/1165226434470629406/6.png?ex=654614ae&is=65339fae&hm=cd453b3e80a5d84d83ee8dc91c83f7eba24fc1492aa6a5b6a59c8da2ce32fc61&=&width=558&height=418",
    "https://media.discordapp.net/attachments/387127158935388160/1165226435045240892/7.png?ex=654614ae&is=65339fae&hm=1a207c543396d64e1f9e78fd44876290169ccccab30b1e4939c91ccdba947713&=&width=492&height=371",
  ];

  for (let i = 1; i <= 7; i++) {
    $(`#img-${i}`).on("click", function () {
      showImage(images[i - 1]);
    });
  }

  $("#close").on("click", function () {
    modal.css("display", "none");
    navbar.css("display", "block");
  });
});
