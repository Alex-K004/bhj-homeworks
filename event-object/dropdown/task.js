document.addEventListener('DOMContentLoaded', function() {

    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropdownValue = dropdown.querySelector('.dropdown__value');
        const dropdownList = dropdown.querySelector('.dropdown__list');
        
        dropdownValue.addEventListener('click', function() {
            document.querySelectorAll('.dropdown__list').forEach(list => {
                if (list !== dropdownList) {
                    list.classList.remove('dropdown__list_active');
                }
            });

            dropdownList.classList.toggle('dropdown__list_active');
        });

        dropdown.querySelectorAll('.dropdown__link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault(); 

                dropdownValue.textContent = this.textContent;

                dropdownList.classList.remove('dropdown__list_active');
            });
        });
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown__list').forEach(list => {
                list.classList.remove('dropdown__list_active');
            });
        }
    });
});