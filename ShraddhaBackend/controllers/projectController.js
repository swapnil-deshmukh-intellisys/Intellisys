const ProjectProposal = require("../models/ProjectProposal");

exports.submitProposal = async (req, res) => {
  try {
    // Validate required fields
    const requiredFields = ['name', 'email', 'category', 'contact', 'description'];
    const missingFields = requiredFields.filter(field => !req.body[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({ 
        message: `❌ Missing required fields: ${missingFields.join(', ')}` 
      });
    }

    const proposal = new ProjectProposal(req.body);
    await proposal.save();
    
    res.status(201).json({ 
      message: "✅ Proposal submitted successfully!",
      proposalId: proposal._id 
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error in project controller:", error);
    res.status(500).json({ message: "Server error" });
  }
};
