export default function BrandScroll() {

    function initScrollAnimation() {
        const $inner = $(".scrollJS .itemScroll");
        addClones();
        $inner.css({ "animation-play-state": "running" });

        function addClones() {
            $inner.each(function () {
                const $wrap = $(this);
                const $cards = $wrap.children().clone().addClass("clone");
                $wrap.append($cards);
            });
        }
    }

    initScrollAnimation();
    let speedGrids = [];
    const gridWidth = document.querySelectorAll(".slideJs");
    function getWidthGrid() {
        document.querySelectorAll(".getHeightGrid").forEach((e, s) => {
            e.style = `--height:${e.getBoundingClientRect().height}px; --speedGrid:${speedGrids[s]
                }s`;
        });
    }
    gridWidth.forEach((e) => {
        e = e.clientHeight / 150;
        speedGrids.push(e);
    }),
        getWidthGrid(),
        window.addEventListener("resize", () => {
            getWidthGrid();
        });

}