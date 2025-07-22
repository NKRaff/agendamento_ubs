import ProfessionalsService from "../app/services/ProfessionalsService.js"

export default async () => {
    try {
        await ProfessionalsService.createProfessional({
            cpf: "97264435040",
            name: "Dr. John Doe",
            email: "dr.johndoe@gmail.com",
            specialty: "Cardiology",
            ubs: "UBS Central",
            rule: "Profissional"
        })
    } catch (error) {
        console.error("Error creating professional:", error.message)
    }
}        
            