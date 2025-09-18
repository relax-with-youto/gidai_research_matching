document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');

    const popupTitle = document.getElementById('popupTitle');
    const popupContent = document.getElementById('popupContent');
    const popupVideo = document.getElementById('popupVideo');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // クラスの切り替え
            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            // データ属性から内容を取得
            const title = card.getAttribute('data-title');
            const content = card.getAttribute('data-content');
            const video = card.getAttribute('data-video');

            popupTitle.textContent = title;
            popupContent.textContent = content;

            if(video) {
                popupVideo.src = video;
                popupVideo.style.display = 'block';
                popupVideo.load();  // 動画をロード
                popupVideo.play().catch(() => {
                    // 自動再生がブラウザでブロックされた場合の処理
                    console.log('自動再生がブロックされました');
                });
            } else {
                popupVideo.src = '';
                popupVideo.style.display = 'none';
            }

            overlay.classList.add('show');
        });
    });

    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('show');
        cards.forEach(c => c.classList.remove('active'));
        popupVideo.pause(); // 動画停止
        popupVideo.currentTime = 0; // 再生位置を先頭に戻す
    });

    overlay.addEventListener('click', (e) => {
        if(e.target === overlay) {
            overlay.classList.remove('show');
            cards.forEach(c => c.classList.remove('active'));
            popupVideo.pause();
            popupVideo.currentTime = 0;
        }
    });
});