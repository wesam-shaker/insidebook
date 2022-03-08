
// SIDEBAR 
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES 
const messagesNotification = document.querySelector('#messagse-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// THEME 
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

// font size 
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
// color 
const colorPalette = document.querySelectorAll('.choose-color span');
// background 
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

// REMOVE ACTIVE CLASS FORM ALL MENU ITEMS 
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notification'){
            document.querySelector('.notification-popup').style.display = 'none';
        } else{
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notification .notification-count').style.display = 'none';
        }
    })
})

// search chat 
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else{
            chat.style.display = 'none';
        }
    })
}

messageSearch.addEventListener('keyup', searchMessage);

// MESSAGES

messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 3000);
})


    // THEME/DISPLAY CUSTOMIZATION 

    // opens modal
    const openThemeModal = () => {
        themeModal.style.display = 'grid';
    }

    // closes modal 
    const closeThemeModal = (e) => {
        if(e.target.classList.contains('customize-theme')){
            themeModal.style.display = 'none';
        }
    }


    // close modal 
    themeModal.addEventListener('click', closeThemeModal);

    theme.addEventListener('click', openThemeModal);
    

    // fonts 
    // remove active class form spans or font size selectors 
    const removeSizeSelector = () => {
        fontSizes.forEach(size => {
            size.classList.remove('active');
        })
    }

    fontSizes.forEach(size => {

        size.addEventListener('click', () => {
            removeSizeSelector();
             let fontSizes;
            size.classList.toggle('active');
            if(size.classList.contains('font-size-1')){
                fontSizes = '10px';
                root.style.setProperty('----sticky-top-left', '5.4rem');
                root.style.setProperty('----sticky-top-right', '5.4rem');
            } else if(size.classList.contains('font-size-2')){
                fontSizes = '13px';
                root.style.setProperty('----sticky-top-left', '5.4rem');
                root.style.setProperty('----sticky-top-right', '-7rem');
            } else if(size.classList.contains('font-size-3')){
                fontSizes = '16px';
                root.style.setProperty('----sticky-top-left', '-2rem');
                root.style.setProperty('----sticky-top-right', '-17.4rem');
            } else if(size.classList.contains('font-size-4')){
                fontSizes = '19px';
                root.style.setProperty('----sticky-top-left', '-5rem');
                root.style.setProperty('----sticky-top-right', '-25rem');
            }
             // change font size of the root html element 
        document.querySelector('html').style.fontSize = fontSizes;
        }) 
    })


// remove active class form colors 
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}


// change primary colors 
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        // remove active class form colors 
        changeActiveColorClass();
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        } else if(color.classList.contains('color-3')){
            primaryHue = 352;
        } else if(color.classList.contains('color-4')){
            primaryHue = 152;
        } else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue)
    })
})

// thme background values 
let darkColorLightness;
let whiteColorLightness;
let lightColorLightness;
    // changes background color 
    const changeBG = () => {
        root.style.setProperty('--light-color-lightness', lightColorLightness);
        root.style.setProperty('--white-color-lightness', whiteColorLightness);
        root.style.setProperty('--dark-color-lightness', darkColorLightness);
    }
Bg1.addEventListener('click', () => {
    lightColorLightness = '95%';
    whiteColorLightness = '100%';
    darkColorLightness = '17%';

    // add active class 
    Bg1.classList.add('active');
    // remove active class from the others 
    Bg3.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
    window.location.reload();
});
Bg2.addEventListener('click', () => {
    lightColorLightness = '15%';
    whiteColorLightness = '20%';
    darkColorLightness = '95%';

    // add active class 
    Bg2.classList.add('active');
    // remove active class from the others 
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});
Bg3.addEventListener('click', () => {
    lightColorLightness = '0%';
    whiteColorLightness = '10%';
    darkColorLightness = '95%';

    // add active class 
    Bg3.classList.add('active');
    // remove active class from the others 
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
});