let click = document.querySelector('.click');
click.addEventListener('click' , function(){
    const success = (position) => {
        console.log(position);
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://us1.locationiq.com/v1/reverse?key=pk.15ccab1bb310b038ebc3a3fee6908359&lat=${lat}&lon=${lon}&format=json`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            click.textContent = data.display_name;
        })
    }
    const error = () => {
        click.textContent = 'Couldnt get the location';
    }
    navigator.geolocation.getCurrentPosition(success , error);
});