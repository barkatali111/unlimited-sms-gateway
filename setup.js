import fs from 'fs';
import readline from 'readline';
import { config } from './config.js';

console.log(`
============================================
    UNLIMITED SMS GATEWAY SETUP WIZARD
============================================
`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function setup() {
    console.log('\n📁 Creating directories...');
    
    // Create all directories
    Object.values(config.DIRECTORIES).forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
            console.log(`✅ Created: ${dir}`);
        }
    });
    
    // Check package.json
    if (!fs.existsSync('package.json')) {
        console.log('\n❌ package.json not found');
        console.log('Please run: npm init -y');
        process.exit(1);
    }
    
    // Check .env file
    if (!fs.existsSync('.env')) {
        console.log('\n🔑 Creating .env file...');
        
        const envContent = `# Telegram Bot Configuration
TELEGRAM_BOT_TOKEN=your_bot_token_here

# System Settings
UNLIMITED_MODE=true
NO_RATE_LIMITS=true
NO_COUNTRY_RESTRICTIONS=true

# Security
ENCRYPTION_LEVEL=QUANTUM_512
AUTO_RECOVERY=true

# AI Settings
AI_ENABLED=true
AI_OPTIMIZATION_LEVEL=MAXIMUM

# Logging
LOG_LEVEL=info
LOG_TO_FILE=true

# Admin
ADMIN_IDS=`;
        
        fs.writeFileSync('.env', envContent);
        console.log('✅ Created .env file');
        
        console.log('\n⚠️ IMPORTANT: Set your Telegram Bot Token in .env file');
        console.log('Get token from @BotFather on Telegram');
    }
    
    // Check config files
    if (!fs.existsSync('config.js')) {
        console.log('\n❌ config.js not found');
        console.log('Please ensure config.js exists in current directory');
        process.exit(1);
    }
    
    // Initialize database files
    console.log('\n💾 Initializing database...');
    const dbFiles = ['users', 'sms_logs', 'templates', 'scheduled'];
    
    dbFiles.forEach(file => {
        const filePath = `./data/${file}.json`;
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, JSON.stringify([]));
            console.log(`✅ Created: ${filePath}`);
        }
    });
    
    console.log('\n============================================');
    console.log('✅ SETUP COMPLETED SUCCESSFULLY!');
    console.log('\nNext steps:');
    console.log('1. Set TELEGRAM_BOT_TOKEN in .env file');
    console.log('2. Run: npm install');
    console.log('3. Run: npm start');
    console.log('4. Open Telegram and start your bot');
    console.log('============================================\n');
    
    rl.close();
}

setup().catch(err => {
    console.error('❌ Setup failed:', err);
    rl.close();
    process.exit(1);
});
