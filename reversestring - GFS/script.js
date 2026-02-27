/**
 * Reverse String — script.js
 * Invierte el orden de una cadena de texto.
 * Ejemplo: "AI4Devs" → "sveD4IA"
 */

(function () {
    'use strict';

    // --- Elementos del DOM ---
    const inputEl   = document.getElementById('inputString');
    const btnEl     = document.getElementById('reverseBtn');
    const resultBox = document.getElementById('resultBox');
    const resultEl  = document.getElementById('resultText');
    const errorEl   = document.getElementById('errorMsg');

    // --- Lógica de inversión ---
    /**
     * Invierte una cadena de texto carácter a carácter.
     * @param {string} str
     * @returns {string}
     */
    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    // --- Validación ---
    function validate(value) {
        if (value.length === 0) {
            return 'Please enter a string to reverse.';
        }
        return null;
    }

    // --- Mostrar resultado ---
    function showResult(reversed) {
        resultEl.textContent = reversed;
        resultBox.classList.add('visible');
    }

    // --- Ocultar resultado ---
    function hideResult() {
        resultBox.classList.remove('visible');
        resultEl.textContent = '';
    }

    // --- Mostrar / limpiar error ---
    function showError(msg) {
        errorEl.textContent = msg || '';
    }

    // --- Handler principal ---
    function handleReverse() {
        const raw = inputEl.value;

        // Limpiar estado previo
        showError('');
        hideResult();

        const error = validate(raw);
        if (error) {
            showError(error);
            inputEl.focus();
            return;
        }

        const result = reverseString(raw);
        showResult(result);
    }

    // --- Event listeners ---
    btnEl.addEventListener('click', handleReverse);

    // Permitir ejecutar con Enter
    inputEl.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            handleReverse();
        }
    });

    // Limpiar resultado/error al modificar el input
    inputEl.addEventListener('input', function () {
        showError('');
        if (inputEl.value === '') hideResult();
    });

})();
