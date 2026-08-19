const button = document.getElementById('btn');
const paragraph = document.querySelector('p');

// ገጹ ሲጀመር በተኑ አልተነካም (false ነው)
let isChanged = false;

button.addEventListener('click', () => {
  if (isChanged === false) {
    // አልተነካም ነበር -> ወደ አዲሱ ገጽታ ቀይረው
    paragraph.textContent = '🎉 እንኳን ደስ አለህ! JavaScript በትክክል ሰርቷል።';
    button.style.backgroundColor = '#16a34a'; // አረንጓዴ
    button.textContent = 'ተክኗል!';
    isChanged = true; // አሁን ተቀይሯል ብለህ መዝግብ
  } else {
    // ቀደም ብሎ ተነክቶ ተቀይሮ ነበር -> ወደ ነበረበት (ወደ ድሮው) መልሰው
    paragraph.textContent = 'HTML፣ CSS እና JS እያገናኘን ነው!';
    button.style.backgroundColor = '#2563eb'; // ሰማያዊ
    button.textContent = 'እዚህ ይጫኑ';
    isChanged = false; // አሁን ወደ ድሮው ተመልሷል ብለህ መዝግብ
  }
});
