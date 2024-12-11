document.addEventListener('DOMContentLoaded', function () {
    // Initialize Sidenav
    const sidenavElems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenavElems);

    // Initialize Materialize Select
    const selectElems = document.querySelectorAll('select');
    M.FormSelect.init(selectElems);

    // Initialize Datepicker
    const datepickerElems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepickerElems, {
        format: 'yyyy-mm-dd'
    });

    // Initialize Chart (Reports Page)
    const expenseChart = document.getElementById('expenseChart');
    if (expenseChart) {
        const ctx = expenseChart.getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Housing', 'Food', 'Transportation', 'Entertainment', 'Utilities'],
                datasets: [{
                    label: 'Expenses by Category',
                    data: [500, 300, 200, 150, 100], // Example data
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                }
            }
        });
    }

    // Handle Form Submission (Transaction Form)
    const transactionForm = document.getElementById('transaction-form');
    if (transactionForm) {
        transactionForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const amount = document.getElementById('amount').value;
            const type = document.getElementById('type').value;
            const category = document.getElementById('category').value;

            if (amount && type && category) {
                console.log('Transaction Added:', { amount, type, category });
                M.toast({ html: 'Transaction added successfully!' });
                transactionForm.reset();
            } else {
                M.toast({ html: 'Please fill out all fields!', classes: 'red' });
            }
        });
    }

    // Populate Transaction List (List Page)
    const transactionList = document.getElementById('transaction-list');
    if (transactionList) {
        const transactions = [
            { date: '2024-12-01', amount: '500', type: 'Income', category: 'Salary' },
            { date: '2024-12-05', amount: '-150', type: 'Expense', category: 'Groceries' },
            { date: '2024-12-10', amount: '-50', type: 'Expense', category: 'Transport' },
        ];

        transactions.forEach(transaction => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${transaction.date}</td>
                <td>${transaction.amount}</td>
                <td>${transaction.type}</td>
                <td>${transaction.category}</td>
                <td>
                    <a href="#" class="btn-small red lighten-1">Delete</a>
                </td>
            `;
            transactionList.appendChild(row);
        });
    }
});
