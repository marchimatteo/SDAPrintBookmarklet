javascript:(
    function(){
        document.querySelector('[title="Calcolo dell\'importo da pagare"]').click();
        let els = [
            document.getElementsByClassName("ui fixed inverted menu")[0],
            document.getElementsByClassName("ui breadcrumbnavbar")[0],
            document.getElementById("root").children[1],
            document.getElementsByClassName("ui blue ribbon label")[0],
            document.getElementsByClassName("ui green ribbon label")[0],
            document.getElementsByClassName("ui basic clearing segment")[0],
            document.getElementsByClassName("ui five column grid")[0],
            document.getElementsByClassName("ui secondary pointing two item menu")[0],
        ];
        if (document.getElementsByClassName("euro sign icon").length > 0) {
            els.push(...document.getElementsByClassName("euro sign icon"));
        }
        try { els.push(document.getElementsByClassName("ui micro statistics")[0].children[4]); } catch(e) {};
        try { els.push(document.getElementsByClassName("ui micro statistics")[0].children[5]); } catch(e) {};
        let editIcons = document.getElementsByClassName("ui compact segment");
        for (let i = 0, len = editIcons.length; i < len; i++) {
            els.push(editIcons[i]);
        }

        let changedEls = [];
        els.forEach(el => {try {el.style.display = "none"; changedEls.push(el); } catch (e) {}});

        try {
            document.getElementsByClassName("ui form")[0].setAttribute("style", "font-size: 0.88rem !important");
        } catch(e) {}
        
        let oldBodyFontSize = document.body.style.fontSize;
        document.body.style.fontSize = "12px";

        window.addEventListener("afterprint", (event) => {
            changedEls.forEach(el => {
                try {
                    el.style.display = null;
                } catch(e) {

                };
            });
            try {
                document.getElementsByClassName("ui form")[0].removeAttribute("style");
            } catch(e) {}
            document.body.style.fontSize = oldBodyFontSize;
        });

        setTimeout(() => { print(); }, 100);
    }
)();