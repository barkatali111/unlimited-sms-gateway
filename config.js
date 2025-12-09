import dotenv from 'dotenv';
dotenv.config();

// Unlimited SMS Configuration
export const config = {
    // Telegram Bot Configuration
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
    
    // Unlimited Settings
    SMS_SETTINGS: {
        UNLIMITED_MODE: true,
        NO_RATE_LIMIT: true,
        NO_COUNTRY_RESTRICTIONS: true,
        MAX_MESSAGE_LENGTH: 1000,
        BULK_SMS_ENABLED: true,
        SCHEDULED_SMS_ENABLED: true
    },
    
    // Transmission Methods
    TRANSMISSION_METHODS: [
        'QUANTUM_TUNNELING',
        'VIRTUAL_GSM_SIMULATION',
        'AI_OPTIMIZED_ROUTING',
        'DIRECT_SOCKET_CONNECTION',
        'WAVE_FUNCTION_TRANSMISSION'
    ],
    
    // Security Settings
    SECURITY: {
        ENCRYPTION_LEVEL: 'QUANTUM_512',
        AUTO_RECOVERY: true,
        MULTI_HOP: true,
        STEALTH_MODE: true
    },
    
    // System Directories
    DIRECTORIES: {
        LOGS: './logs',
        DATA: './data',
        BACKUPS: './backups',
        SESSIONS: './sessions'
    },
    
    // AI Engine Settings
    AI_ENGINE: {
        ENABLED: true,
        AUTO_LEARNING: true,
        PREDICTIVE_ANALYSIS: true,
        OPTIMIZATION_LEVEL: 'MAXIMUM'
    },
    
    // Unlimited Features
    FEATURES: {
        BULK_SMS: true,
        SCHEDULED_SMS: true,
        TEMPLATES: true,
        GROUPS: true,
        BROADCAST: true,
        API_MODE: true
    }
};

// Default Country Codes
export const COUNTRY_CODES = {
    'PAKISTAN': '+92',
    'USA': '+1',
    'UK': '+44',
    'UAE': '+971',
    'SAUDI': '+966',
    'INDIA': '+91',
    'CHINA': '+86',
    'ALL': 'ALL'
};

// Unlimited SMS Templates
export const SMS_TEMPLATES = {
    QUICK_SEND: 'QUICK_SEND',
    BULK_SEND: 'BULK_SEND',
    SCHEDULED: 'SCHEDULED',
    BROADCAST: 'BROADCAST',
    CUSTOM: 'CUSTOM'
};

// Transmission Status
export const STATUS = {
    PENDING: 'PENDING',
    PROCESSING: 'PROCESSING',
    SENT: 'SENT',
    DELIVERED: 'DELIVERED',
    FAILED: 'FAILED',
    RETRYING: 'RETRYING'
};

// Error Codes
export const ERROR_CODES = {
    SUCCESS: 0,
    INVALID_PHONE: 1001,
    INVALID_MESSAGE: 1002,
    TRANSMISSION_ERROR: 1003,
    SYSTEM_ERROR: 1004,
    RECOVERY_IN_PROGRESS: 1005
};
