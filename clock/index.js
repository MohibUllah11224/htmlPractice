setInterval(() => {
    const d = new Date();
    const htime = d.getHours();
    const mtime = d.getMinutes();
    const stime = d.getSeconds();
    
    const hrotation = 30 * htime + mtime / 2; // 30 degrees per hour and half a degree for each minute
    const mrotation = 6 * mtime; // 6 degrees per minute
    const srotation = 6 * stime; // 6 degrees per second
    
    // Update the rotations of the clock hands
    houre.style.transform = `rotate(${hrotation}deg)`;
    minut.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;
}, 1000);
