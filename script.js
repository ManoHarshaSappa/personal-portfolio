function showTab(tabId) {
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-link');
    buttons.forEach(button => button.classList.remove('active'));

    // Hide all tab panes
    const panes = document.querySelectorAll('.tab-pane');
    panes.forEach(pane => pane.classList.remove('active'));

    // Show the clicked tab and highlight the button
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
}
