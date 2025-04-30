(function unbookmarkAll() {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    const randomDelay = () => delay(1800 + Math.random() * 1000); // 1.8–2.8 seconds

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
        let lastCount = -1;
        let totalUnbookmarked = 0;

        function ordinal(n) {
            const s = ["th", "st", "nd", "rd"],
                v = n % 100;
            return n + (s[(v - 20) % 10] || s[v] || s[0]);
        }

        while (iterationCount < maxIterations) {
            const buttons = Array.from(document.querySelectorAll(selector));
            if (buttons.length === 0 && iterationCount === 0) {
                console.error("❌ No bookmarks found. Make sure you're on https://x.com/i/bookmarks and tweets are fully loaded.");
                return;
            }

            if (buttons.length === 0 || buttons.length === lastCount) {
                break;
            }

            lastCount = buttons.length;

            for (const button of buttons) {
                try {
                    button.click();
                    totalUnbookmarked++;
                    console.log(`🗑️ Unbookmarked ${ordinal(totalUnbookmarked)} tweet.`);
                    await randomDelay(); // Randomized cooldown
                } catch (err) {
                    console.warn("⚠️ Failed to click a bookmark button:", err);
                }
            }

            iterationCount++;
            console.log("📜 Loading next page...");
            await scrollOneViewport();
        }

        console.log(`🎉 Done! Unbookmarked ${totalUnbookmarked} tweet(s).`);
    })();
})();
