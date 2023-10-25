var animation_container = document.getElementById("animation-container");

      
      function create_cell(cell) {
        var fragment = document.createDocumentFragment();

        for (var i = 0; i < cell; i++) {
          var square_item = document.createElement("div");
          square_item.className = "square_item";
          square_item.style.animationDelay = Math.ceil(Math.random() * 5000) + "ms";
          fragment.appendChild(square_item);
        }

        animation_container.appendChild(fragment);
      }

      create_cell(2000); 