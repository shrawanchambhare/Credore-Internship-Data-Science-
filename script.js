const projectDetails = {
    1: {
        title: "Population Data Analysis",
        icon: "📊",
        description: "Comprehensive analysis of global population trends across multiple countries and years.",
        overview: "This project involves analyzing global population data using Python. The data spans multiple countries and years, allowing us to explore demographic trends and visualize population changes over time.",
        features: [
            "Data cleaning and inspection of population datasets",
            "Grouping and aggregating population data by country and year",
            "Analyzing demographic trends for specific countries and globally",
            "Visualizing population changes over time with charts",
            "Statistical analysis of population growth patterns"
        ],
        tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
        dataset: {
            name: "Global Population Data",
            file: "orignal 1.csv",
            columns: ["Country Name", "Country Code", "Year", "Population"]
        },
        files: [
            "_Task1.ipynb - Main analysis notebook",
            "orignal 1.csv - Raw population dataset",
            "Population Data Analysis Report.pdf - Detailed report"
        ]
    },
    2: {
        title: "Titanic Data Cleaning & EDA",
        icon: "🚢",
        description: "Data preprocessing and exploratory analysis of the famous Titanic dataset.",
        overview: "This project focuses on cleaning and exploring the Titanic dataset. It includes handling missing values, encoding categorical variables, and creating insightful visualizations to understand survival patterns.",
        features: [
            "Handled missing values in Age, Embarked, and Cabin columns",
            "Encoded categorical variables for analysis",
            "Created comprehensive visualizations for EDA",
            "Analyzed survival rates across different demographics",
            "Generated cleaned dataset for further modeling"
        ],
        tools: ["Python", "Pandas", "NumPy", "Seaborn", "Matplotlib", "Jupyter Notebook"],
        visualizations: [
            "Age Distribution - Distribution of passenger ages",
            "Survival Count - Survival rates visualization",
            "Fare by Class - Fare analysis across passenger classes"
        ],
        files: [
            "Task2.ipynb - Main preprocessing and EDA notebook",
            "cleaned_titanic.csv - Cleaned dataset output",
            "train.csv - Original Titanic dataset"
        ]
    },
    3: {
        title: "Customer Purchase Prediction",
        icon: "🤖",
        description: "Machine learning model to predict customer purchase behavior using Decision Tree Classifier.",
        overview: "This project implements a Decision Tree Classifier to predict whether a customer will purchase a product or service based on demographic and behavioral data from the UCI Bank Marketing dataset.",
        features: [
            "Data preprocessing with categorical encoding",
            "Train/Test split for model validation",
            "Decision Tree training with optimized parameters",
            "Comprehensive model evaluation metrics",
            "Confusion matrix and classification report",
            "Decision tree visualization"
        ],
        tools: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
        metrics: {
            accuracy: "89.5%",
            precision: "58.0%",
            recall: "39.8%",
            f1Score: "47.2%"
        },
        dataset: {
            name: "UCI Bank Marketing Dataset",
            file: "bank-full.csv",
            records: "45,211 total records"
        },
        model: {
            type: "Decision Tree Classifier",
            maxDepth: "5",
            randomState: "42",
            split: "70% training / 30% testing"
        },
        files: [
            "Task3.ipynb - Complete ML pipeline notebook",
            "bank-full.csv - UCI Bank Marketing dataset",
            "output_report.md - Detailed results report"
        ]
    }
};

function showDetails(projectId) {
    const project = projectDetails[projectId];
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    let content = `
        <div class="detail-header">
            <div class="project-icon" style="font-size: 3rem; margin-bottom: 1rem;">${project.icon}</div>
            <h2 class="detail-title">${project.title}</h2>
            <p style="color: var(--text-secondary); font-size: 1.1rem;">${project.description}</p>
        </div>
        
        <div class="detail-section">
            <h3>📋 Overview</h3>
            <p style="color: var(--text-secondary); line-height: 1.8;">${project.overview}</p>
        </div>
        
        <div class="detail-section">
            <h3>✨ Key Features</h3>
            <ul class="detail-list">
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
        
        <div class="detail-section">
            <h3>🛠️ Tools & Technologies</h3>
            <div class="project-tech">
                ${project.tools.map(tool => `<span class="tech-badge">${tool}</span>`).join('')}
            </div>
        </div>
    `;
    
    if (project.metrics) {
        content += `
            <div class="detail-section">
                <h3>📊 Model Performance</h3>
                <div class="metrics-grid">
                    <div class="metric-box">
                        <div class="metric-value">${project.metrics.accuracy}</div>
                        <div class="metric-label">Accuracy</div>
                    </div>
                    <div class="metric-box">
                        <div class="metric-value">${project.metrics.precision}</div>
                        <div class="metric-label">Precision</div>
                    </div>
                    <div class="metric-box">
                        <div class="metric-value">${project.metrics.recall}</div>
                        <div class="metric-label">Recall</div>
                    </div>
                    <div class="metric-box">
                        <div class="metric-value">${project.metrics.f1Score}</div>
                        <div class="metric-label">F1 Score</div>
                    </div>
                </div>
            </div>
        `;
    }
    
    if (project.model) {
        content += `
            <div class="detail-section">
                <h3>🤖 Model Configuration</h3>
                <ul class="detail-list">
                    <li><strong>Type:</strong> ${project.model.type}</li>
                    <li><strong>Max Depth:</strong> ${project.model.maxDepth}</li>
                    <li><strong>Random State:</strong> ${project.model.randomState}</li>
                    <li><strong>Data Split:</strong> ${project.model.split}</li>
                </ul>
            </div>
        `;
    }
    
    if (project.dataset) {
        content += `
            <div class="detail-section">
                <h3>📁 Dataset Information</h3>
                <ul class="detail-list">
                    <li><strong>Name:</strong> ${project.dataset.name}</li>
                    <li><strong>File:</strong> ${project.dataset.file}</li>
                    ${project.dataset.records ? `<li><strong>Records:</strong> ${project.dataset.records}</li>` : ''}
                    ${project.dataset.columns ? `<li><strong>Columns:</strong> ${project.dataset.columns.join(', ')}</li>` : ''}
                </ul>
            </div>
        `;
    }
    
    if (project.visualizations) {
        content += `
            <div class="detail-section">
                <h3>📈 Visualizations</h3>
                <ul class="detail-list">
                    ${project.visualizations.map(viz => `<li>${viz}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    content += `
        <div class="detail-section">
            <h3>📂 Project Files</h3>
            <ul class="detail-list">
                ${project.files.map(file => `<li>${file}</li>`).join('')}
            </ul>
        </div>
    `;
    
    modalBody.innerHTML = content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
