(function() {
    const wallets = [
      "0xbaa93498a3bf60d01ef28ede66ba8bfd05975a4a",
    ];

    
    function fillInput(input, value) {
      input.setAttribute('value', value);
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }
    
    async function addWallets() {
      for (let i = 0; i < wallets.length; i++) {
        console.log(`Добавление кошелька ${i + 1} из ${wallets.length}`);

        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
          if (button.textContent.includes('Add address')) {
            button.click()
          }
        });
        await new Promise((resolve) => setTimeout(resolve, 300));


        const inputs = document.querySelectorAll('input');
        fillInput(inputs[1], wallets[i]);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        success = false
        while (!success) {
          const divs = document.querySelectorAll('div');
          divs.forEach(div => {
            if (div.className.includes('SearchAddress_address') && div.textContent.includes(wallets[i])) {
              console.log(div)
              div.click()
              success = true
            }
          });
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      }
    
      console.log('Завершено');
    }
    
    addWallets();
   })();
