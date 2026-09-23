/* =============================================================
   YOUR PROJECTS

   This is the only file you need to edit to add or remove
   projects from your site. Everything else updates itself.

   TO ADD A PROJECT:
     Copy one whole block below, from the opening { to the
     closing },  and paste it into the list, then edit the values.

   TO REMOVE A PROJECT:
     Delete its whole block, from the opening { to the closing },

   Fields:
     title       - project name (required)
     year        - e.g. "2026" (required)
     description - one or two sentences (required)
     tags        - list of technologies, e.g. ["Python", "SQL"]
     link        - URL to the repo, demo, or write-up
     linkLabel   - text shown for the link, e.g. "View on GitHub"

   Projects are shown in the order you list them here.
============================================================= */

const projects = [
  {
    title: "NextGen RF Wi-Fi Channel Scanner",
    year: "2026",
    description: "A Raspberry Pi tool for NextGen RF Design that continuously scans nearby Wi-Fi networks, stores per-channel metrics in SQLite, and scores channels on demand with configurable weights. Random Forest models forecast channel quality 5, 10, and 15 minutes ahead to power a real-time channel recommendation engine.",
    tags: ["Python", "SQLite", "scikit-learn", "Dash", "Raspberry Pi"]
  },
  {
    title: "Alfalfa Tissue Segmentation Pipeline",
    year: "2026",
    description: "An end-to-end image analysis pipeline built with USDA ARS and the University of Minnesota that converts microscopy images, segments alfalfa stem cross-sections with custom-trained YOLO models, and analyzes lignin and pectin content in the results.",
    tags: ["Python", "YOLOv11", "Computer Vision", "Label Studio", "AWS S3"],
    link: "https://youtube.com/playlist?list=PLNrWlSFvnRP3vFYHja2j2lZMpaQrH8jaB",
    linkLabel: "Watch the walkthrough videos"
  },
  {
    title: "MNIST Digit Classifier",
    year: "2026",
    description: "An interactive web app that classifies hand-drawn digits with a PyTorch convolutional neural network. Live data augmentation and a custom preprocessing pipeline close the gap between MNIST test accuracy and real user drawings.",
    tags: ["Python", "PyTorch", "Streamlit", "CNN"],
    link: "https://firelegacy04-digit-prediction-main-yjv0u7.streamlit.app/",
    linkLabel: "Try the live demo"
  }
];
