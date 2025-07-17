Fran

function adicionarPet() {
    const container = document.getElementById('pets-container');

    const novoPet = document.createElement('div');
    novoPet.classList.add('pet-entry', 'row', 'g-3');
    novoPet.innerHTML = `
      <div class="col-md-6">
        <label class="form-label">Tipo de Pet</label>
        <input type="text" class="form-control" name="tipoPet[]" required />
      </div>
      <div class="col-md-6">
        <label class="form-label">Nome do Pet</label>
        <input type="text" class="form-control" name="nomePet[]" required />
      </div>
      <div class="col-md-6">
        <label class="form-label">Idade do Pet</label>
        <input type="number" class="form-control" name="idadePet[]" required />
      </div>
      <div class="col-md-6">
        <label class="form-label">Foto do Pet</label>
        <input type="file" class="form-control" name="fotoPet[]" accept="image/*" />
      </div>
      <hr class="my-4 border-white">
    `;
    container.appendChild(novoPet);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-cadastro");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Impede o envio real do formulário
      alert("Cadastro realizado com sucesso! Agora faça login para acessar sua conta.");
      setTimeout(function () {
        window.location.href = "index.html";
      }, 1000);
    });
  });
