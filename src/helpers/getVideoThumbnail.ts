/**
 * Generate a YouTube thumbnail from a video URL
 * 
 * @see: https://stackoverflow.com/a/2068371
 * @param url URL to YouTube video (with `v=<id>`)
 */
function generateYouTubeThumbnail(url: string): string {
    // Strip ID from URL
    let id = url.split('v=')[1];

    // If we didn't get an ID, URL was malformed
    if(id) {
        // If there's any trailing query params, remove them
        const ampersandPosition = id.indexOf('&');
        if (ampersandPosition != -1) {
            id = id.substring(0, ampersandPosition);
        }

        // Return image URL using ID
        return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
    }

    console.error('YouTube URL was malformed, make sure it has "v="', url)
    return `https://img.youtube.com/vi/placeholder/6.jpg`
}

/**
 * Video Platforms supported. Only permanent solutions.
 * We don't allow for Twitch because it doesn't archive past 30 days
 */
type VideoPlatforms = "youtube" | "vimeo"

/**
 * Generates the appropriate thumbnail for a provided video
 * 
 * @param platform Video platforms
 * @param url Direct URL to a video
 */
function getVideoThumbnail(platform: VideoPlatforms, url: string): string  {
    switch(platform) {
        case 'youtube':
            return generateYouTubeThumbnail(url)
        
        // Unsupported format, return a generic placeholder
        default:
            return "placeholder_url or loading component/animation"
    }
}

export default getVideoThumbnail
