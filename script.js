const quotes = [
    "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre. - Albert Einstein",
    "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme. - Winston Churchill",
    "Tout ce que l'esprit peut concevoir et croire, il peut l'accomplir. - Napoléon Hill"
];
 <script>
        function showSection(sectionId, button) {
            // Masquer toutes les sections
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });

            // Afficher la section sélectionnée
            const section = document.getElementById(sectionId);
            section.classList.add('active');

            // Faire défiler vers le haut de la section
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Mettre à jour les boutons actifs
            document.querySelectorAll('.nav-list button').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
        }
    </script>
document.getElementById('quote').innerText = quotes[Math.floor(Math.random() * quotes.length)];
