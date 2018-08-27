/**
 * Main animation function to create on it base more powerful animation functions
 */
export function animate(draw: (params?: { nextTime?: number, timeDelta: number }) => void, duration: number) {
    let previousTime = 0;
    const start = performance.now();

    requestAnimationFrame(function internalAnimate(time) {
        let nextTime = time - start;

        if (nextTime > duration) {
            nextTime = duration;
        }

        draw({ nextTime, timeDelta: nextTime - previousTime });

        previousTime = nextTime;
        if (nextTime < duration) {
            requestAnimationFrame(internalAnimate);
        }
    });
}
