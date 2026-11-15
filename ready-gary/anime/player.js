async function readVideoPart(url) {
  const response = await fetch(url)
  if (!response.ok) throw new Error('Episode video could not be loaded')
  return Uint8Array.from(atob(await response.text()), character => character.charCodeAt(0))
}

for (const button of document.querySelectorAll('.anime-play[data-video-prefix]')) {
  const player = button.closest('.anime-player')
  const video = player.querySelector('video')
  const status = player.querySelector('.anime-status')

  button.addEventListener('click', async () => {
    const returnFocus = document.activeElement === button
    button.disabled = true
    status.hidden = false
    status.textContent = 'Loading episode…'

    try {
      const parts = await Promise.all(Array.from({ length: Number(button.dataset.videoParts) },
        (_, index) => readVideoPart(button.dataset.videoPrefix + (index + 1) + '.txt')))
      const videoUrl = URL.createObjectURL(new Blob(parts, { type: 'video/mp4' }))
      video.src = videoUrl
      video.controls = true
      button.hidden = true
      status.hidden = true
      if (returnFocus) video.focus()
      video.play().catch(() => {
        status.textContent = 'Press play in the video controls to start the episode.'
        status.hidden = false
      })
      video.addEventListener('playing', () => { status.hidden = true }, { once: true })
    } catch {
      status.textContent = 'The episode could not load. Please try again.'
      button.disabled = false
    }
  })
}
