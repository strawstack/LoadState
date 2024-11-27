function loadState(name) {

    const qs = s => document.querySelector(s);

    const summary = qs(".loadState>summary");
    const saveBtn = qs(".loadState>.btns>.save");
    const loadBtn = qs(".loadState>.btns>.load");

    loadBtn.addEventListener("change", e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = readerEvent => {
            code = readerEvent.target.result
        };
    });

    return {
        save,
        load
    };
}