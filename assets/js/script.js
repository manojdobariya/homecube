$(document).ready(function () {
    $(".navbar-toggler").click(function (e) {
        var s = $(this);
        "true" === s.attr("aria-expanded") && ($(".iconHamburger").removeClass("d-block").addClass("d-none"), $(".iconClose").removeClass("d-none").addClass("d-block")),
            "false" === s.attr("aria-expanded") && ($(".iconClose").removeClass("d-block").addClass("d-none"), $(".iconHamburger").removeClass("d-none").addClass("d-block"));
    })
}),
    jQuery(function () {
        $(window).scroll(function () {
            $(this).scrollTop() > 100 ? $(".back-to-top").fadeIn("slow") : $(".back-to-top").fadeOut("slow");
        });
    });
var x,
    i,
    j,
    selElmnt,
    a,
    b,
    c
for (
    x = document.getElementsByClassName("custom-select"),
    i = 0;
    i < x.length;
    i++
) {
    for (
        selElmnt = x[i].getElementsByTagName("select")[0],
        (a = document.createElement("DIV")).setAttribute("class", "select-selected"),
        selElmnt && (a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML),
        x[i].appendChild(a),
        (b = document.createElement("DIV")).setAttribute("class", "select-items select-hide"),
        j = 0;
        selElmnt && j < selElmnt.length;
        j++
    )
        ((c = document.createElement("DIV")).innerHTML = selElmnt.options[j].innerHTML),
            0 === j && c.classList.add("same-as-selected"),
            c.addEventListener("click", function (e) {
                var s, t, l, r, o;
                for (t = 0, r = this.parentNode.parentNode.getElementsByTagName("select")[0], o = this.parentNode.previousSibling; t < r.length; t++)
                    if (r.options[t].innerHTML == this.innerHTML) {
                        for (l = 0, r.selectedIndex = t, o.innerHTML = this.innerHTML, s = this.parentNode.getElementsByClassName("same-as-selected"); l < s.length; l++) s[l].removeAttribute("class");
                        this.setAttribute("class", "same-as-selected"),
                            this.previousElementSibling ? this.parentNode.previousElementSibling.setAttribute("class", "select-selected selected") : this.parentNode.previousElementSibling.setAttribute("class", "select-selected");
                        break;
                    }
                o.click();
            }),
            b.appendChild(c);
    x[i].appendChild(b),
        a.addEventListener("click", function (e) {
            e.stopPropagation(), closeAllSelect(this), this.nextSibling.classList.toggle("select-hide"), this.classList.toggle("select-arrow-active");
        });
}
function closeAllSelect(e) {
    var s,
        t,
        l,
        r = [];
    for (l = 0, s = document.getElementsByClassName("select-items"), t = document.getElementsByClassName("select-selected"); l < t.length; l++) e == t[l] ? r.push(l) : t[l].classList.remove("select-arrow-active");
    for (l = 0; l < s.length; l++) r.indexOf(l) && s[l].classList.add("select-hide");
}

// Scroll Back to Top Js Start
var progressPath = document.querySelector('.progress-button path');
var pathLength = progressPath.getTotalLength();
progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
progressPath.style.strokeDashoffset = pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength / height);
    progressPath.style.strokeDashoffset = progress;
}
updateProgress();
$(window).scroll(updateProgress);
var offset = 50;
var duration = 550;
jQuery(window).on('scroll', function () {
    if (jQuery(this).scrollTop() > offset) {
        jQuery('.progress-button').addClass('active-progress');
    } else {
        jQuery('.progress-button').removeClass('active-progress');
    }
});
jQuery('.progress-button').on('click', function (event) {
    event.preventDefault();
    jQuery('html, body').animate({ scrollTop: 0 }, duration);
    return false;
})

const toggleButton = document.getElementById("toggleSearch");
const searchForm = document.getElementById("searchForm");

let isVisible = false;

toggleButton.addEventListener("click", () => {
    if (!isVisible) {
        searchForm.style.display = "block";
        searchForm.style.animationName = "slide-up";
    } else {
        searchForm.style.animationName = "slide-down";
        // Wait for animation to finish before hiding
        searchForm.addEventListener("animationend", function hideAfterAnimation() {
            searchForm.style.display = "none";
            searchForm.removeEventListener("animationend", hideAfterAnimation);
        });
    }
    isVisible = !isVisible;
});

$(document).ready(function () {
    $('.nav-item.dropdown').hover(
        function () {
            const $dropdown = $(this).find('.dropdown-menu');
            $dropdown.stop(true, true)
                .addClass('showing');
        },
        function () {
            const $dropdown = $(this).find('.dropdown-menu');
            $dropdown.stop(true, true)
                .removeClass('showing');
        }
    );
    $('.dropdown.sub-dropdown').hover(
        function () {
            const $dropdown = $(this).find('.dropdown-submenu');
            $dropdown.stop(true, true)
                .addClass('showing');
        },
        function () {
            const $dropdown = $(this).find('.dropdown-submenu');
            $dropdown.stop(true, true)
                .removeClass('showing');
        }
    );
});

function toggleDropdownClass() {
    if (window.matchMedia("(min-width: 992px)").matches) {
        // Desktop
        $('.dropdown.sub-dropdown ul').removeClass('dropdown-menu').addClass('dropdown-submenu');
    } else {
        // Mobile
        $('.dropdown.sub-dropdown ul').removeClass('dropdown-submenu').addClass('dropdown-menu');
    }
}

// Initial check
toggleDropdownClass();

// Re-check on window resize
$(window).on('resize', function () {
    toggleDropdownClass();
});