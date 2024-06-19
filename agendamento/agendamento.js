document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('agendamentoForm');
    const listaAgendamentos = document.getElementById('listaAgendamentos');
    const dataInput = document.getElementById('data');
    const agendamentos = [];
    const maxAgendamentosPorDia = 3;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nomeCompleto = document.getElementById('nomeCompleto').value;
        const cpf = document.getElementById('cpf').value;
        const telefone1 = document.getElementById('telefone1').value;
        const telefone2 = document.getElementById('telefone2').value;
        const data = document.getElementById('data').value;
        const hora = document.getElementById('hora').value;

        if (nomeCompleto && cpf && telefone1 && data && hora) {
            const dataHoraAgendamento = new Date(`${data}T${hora}`);

            // Verificar número de agendamentos para a data
            const agendamentosNoDia = agendamentos.filter(agendamento => agendamento.data === data).length;
            if (agendamentosNoDia >= maxAgendamentosPorDia) {
                alert('Já existem 3 agendamentos para esta data. Por favor, escolha outra data.');
                return;
            }

            const conflito = agendamentos.some(agendamento => {
                const dataHoraExistente = new Date(`${agendamento.data}T${agendamento.hora}`);
                return dataHoraExistente.toDateString() === dataHoraAgendamento.toDateString() &&
                       Math.abs(dataHoraAgendamento - dataHoraExistente) < 60 * 60 * 1000;
            });

            if (conflito) {
                alert('Já existe um agendamento para esta data e horário, ou o horário é inferior a uma hora de diferença de outro agendamento.');
            } else {
                adicionarAgendamento(nomeCompleto, cpf, telefone1, telefone2, data, hora);
                form.reset();
                atualizarDisponibilidadeDatas();
            }
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });

    function adicionarAgendamento(nomeCompleto, cpf, telefone1, telefone2, data, hora) {
        const agendamento = {
            nomeCompleto,
            cpf,
            telefone1,
            telefone2,
            data,
            hora
        };

        agendamentos.push(agendamento);

        const agendamentoItem = document.createElement('li');
        agendamentoItem.innerHTML = `Nome: <strong>${nomeCompleto}</strong>, CPF: <strong>${cpf}</strong>, Telefone 1: <strong>${telefone1}</strong>, Telefone 2: <strong>${telefone2}</strong>, Data: <strong>${data}</strong>, Hora: <strong>${hora}</strong>`;
        listaAgendamentos.appendChild(agendamentoItem);
    }

    function atualizarDisponibilidadeDatas() {
        // Obtenha todas as datas com 3 ou mais agendamentos
        const datasIndisponiveis = agendamentos.reduce((acc, agendamento) => {
            acc[agendamento.data] = (acc[agendamento.data] || 0) + 1;
            return acc;
        }, {});

        const datasBloqueadas = Object.keys(datasIndisponiveis).filter(data => datasIndisponiveis[data] >= maxAgendamentosPorDia);

        // Atualizar a disponibilidade do campo de data
        const dataMin = dataInput.min ? new Date(dataInput.min) : new Date();
        const dataMax = dataInput.max ? new Date(dataInput.max) : new Date(dataMin.getFullYear() + 1, dataMin.getMonth(), dataMin.getDate());

        let datasValidas = [];
        for (let d = new Date(dataMin); d <= dataMax; d.setDate(d.getDate() + 1)) {
            const dataStr = d.toISOString().split('T')[0];
            if (!datasBloqueadas.includes(dataStr)) {
                datasValidas.push(dataStr);
            }
        }

        dataInput.setAttribute('min', dataMin.toISOString().split('T')[0]);
        dataInput.setAttribute('max', dataMax.toISOString().split('T')[0]);
        dataInput.innerHTML = datasValidas.map(data => `<option value="${data}">${data}</option>`).join('');
    }

    atualizarDisponibilidadeDatas();
});


