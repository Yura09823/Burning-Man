// BUTTON TICKET
document.getElementById('btnTicket').onmouseenter = () =>{
    document.getElementById('btnTicket').style.borderRadius = '25px';
    document.getElementById('btnTicket').style.transition = '0.5s'
    document.getElementById('btnTicket').style.cursor = 'pointer';
    document.getElementById('ticket').style.opacity = '1';
    document.getElementById('ticket').style.width = '32px';
    document.getElementById('ticket').style.height = '32px';   
    document.getElementById('ticket').style.margin = '0 0 0 40px'; 
    document.getElementById('ticket').style.transition = '0.5s'; 
}
document.getElementById('btnTicket').onmouseleave = ()=>{
    document.getElementById('btnTicket').style.borderRadius = '0px';
    document.getElementById('ticket').style.opacity = '0';
    document.getElementById('ticket').style.width = '1px';
    document.getElementById('ticket').style.height = '1px'; 
    document.getElementById('ticket').style.margin = '0';  
}
// NAVBAR START

// MENU 
document.getElementById('menu').onmouseenter = ()=>{
    document.getElementById('menu').style.transform = 'scale(1.6, 1.6)';
    document.getElementById('menu').style.transition = '0.5s';
}   
document.getElementById('menu').onmouseleave = ()=>{
    document.getElementById('menu').style.transform = 'scale(1, 1)';
} 

// ABOUT
document.getElementById('about').onmouseenter = ()=>{
    document.getElementById('about').style.transform = 'scale(1.6, 1.6)';
    document.getElementById('about').style.transition = '0.5s';
}
document.getElementById('about').onmouseleave = ()=>{
    document.getElementById('about').style.transform = 'scale(1, 1)';
}

// TICKETS
document.getElementById('tickets').onmouseenter = ()=>{
    document.getElementById('tickets').style.transform = 'scale(1.6, 1.6)';
    document.getElementById('tickets').style.transition = '0.5s';
}
document.getElementById('tickets').onmouseleave = ()=>{
    document.getElementById('tickets').style.transform = 'scale(1, 1)';
}

// CONTACTS
document.getElementById('contacts').onmouseenter = ()=>{
    document.getElementById('contacts').style.transform = 'scale(1.6, 1.6)';
    document.getElementById('contacts').style.transition = '0.5s';
}
document.getElementById('contacts').onmouseleave = ()=>{
    document.getElementById('contacts').style.transform = 'scale(1, 1)';
}