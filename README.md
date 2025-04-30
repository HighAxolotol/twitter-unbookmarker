Unbookmark All Script

This script automates the process of unbookmarking tweets on [X.com](https://x.com) (formerly known as Twitter). It removes bookmarks from your account by clicking the "Remove Bookmark" buttons in sequence and supports paginated results.

Features
- Automatically scrolls to load more bookmarks.
- Clicks "Remove Bookmark" for each tweet.
- Implements a randomized delay between clicks to avoid detection.
- Tracks and displays the number of tweets unbookmarked.

Usage

1. Navigate to your bookmarks: Open the [Bookmarks page](https://x.com/i/bookmarks) on your X account, where you have tweets bookmarked.
   
2. Run the script: 
   - Open the browser developer tools (usually `F12` or `Ctrl + Shift + I`).
   - Go to the **Console** tab.
   - Paste the entire script into the console and press `Enter`.
   
3. Wait for the script to finish: The script will go through your bookmarks, unbookmarking tweets one by one and showing progress in the console.

How it Works

- The script selects the "Remove Bookmark" button for each tweet and clicks it.
- It waits for the new tweets to load after each scroll, simulating user activity.
- The script runs for up to 50 iterations (adjustable), but will stop early if no new buttons are found.
- A randomized delay between 1.8 and 2.8 seconds is added after each click to avoid detection by anti-bot systems.

Code Breakdown

- `randomDelay()`: Adds a randomized delay between clicks to simulate human-like behavior.
- `scrollOneViewport()`: Scrolls the page down by one viewport to load more bookmarks.
- `ordinal()`: Formats the count with an ordinal suffix (e.g., "1st", "2nd", "3rd").
- Iteration Logic: The script loops through the "Remove Bookmark" buttons, clicks them, and moves to the next page if needed until it reaches the iteration limit or all bookmarks are removed.

Requirements

- This script is designed to run on the X.com website's bookmark page (`https://x.com/i/bookmarks`).
- Works best on a desktop browser with full access to bookmarks.

Disclaimer

- This script is for personal use and educational purposes. Use at your own risk.
- This script simulates human-like behavior but may still be subject to platform detection systems.
- Please respect platform terms of service and use responsibly.
