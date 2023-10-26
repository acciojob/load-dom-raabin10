
        // Function to add "DOM load success" to the page
        function addTextToPage() {
            const text = document.createElement("p");
            text.textContent = "DOM load success";
            document.body.appendChild(text);
        }

        // Add an event listener to call the function when the DOM is loaded
        document.addEventListener("DOMContentLoaded", addTextToPage);
