(function unbookmarkAll() {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    const randomDelay = () => delay(1000 + Math.random() * 1000); // 1–2 seconds between each click
    const chunkPause = () => delay(10000); // 10-second pause after every 10 unbookmarks

    async function scrollOneViewport() {
        const viewportHeight = window.innerHeight;
        window.scrollTo(0, window.scrollY + viewportHeight);
        await delay(2000); // Wait for new bookmarks to load
    }

    (async () => {
        console.log("🚀 Starting to remove bookmarks...");

        const selector = 'button[data-testid="removeBookmark"]';
        let iterationCount = 0;
        const maxIterations = 50;
        let totalUnbookmarked = 0;
        let chunkCounter = 0;

        function ordinal(n) {
            const s = ["th", "st", "nd", "rd"],
                v = n % 100;
            return n + (s[(v - 20) % 10] || s[v] || s[0]);
        }

        while (iterationCount < maxIterations) {
            const button = document.querySelector(selector);

            if (!button) {
                console.log("📜 No more bookmarks found. Scrolling down...");
                await scrollOneViewport();
                iterationCount++;
                continue;
            }

            try {
                button.click();
                totalUnbookmarked++;
                chunkCounter++;
                console.log(`🗑️ Unbookmarked ${ordinal(totalUnbookmarked)} tweet.`);
                await randomDelay();
            } catch (err) {
                console.warn("⚠️ Failed to click a bookmark button:", err);
            }

            if (chunkCounter >= 10) {
                console.log("⏸️ Pausing for 10 seconds...");
                await chunkPause();
                chunkCounter = 0;
            }
        }

        console.log(`🎉 Done! Unbookmarked ${totalUnbookmarked} tweet(s).`);
    })();
})();
