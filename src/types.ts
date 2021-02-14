export type AVAILABLE_REGIONS =
    | "us-east-1"
    | "us-east-2"
    | "us-west-2"
    | "ap-southeast-2"
    | "ca-central-1"
    | "eu-west-1"
    | "eu-central-1"

/**
 * 8 KHz and 16 KHz
 * US English (en-US)
 * US Spanish (es-US)
 * 8 KHz only
 * Australian English (en-AU)
 * British English (en-GB)
 * French (fr-FR)
 * Canadian French (fr-CA)
 */
export type LANGUAGES = "af-ZA" | "ar-AE" | "ar-SA" | "cy-GB" | "da-DK" | "de-CH" | "de-DE" | "en-AB" | "en-AU" | "en-GB" | "en-IE" | "en-IN" | "en-US" | "en-WL" | "es-ES" | "es-US" | "fa-IR" | "fr-CA" | "fr-FR" | "ga-IE" | "gd-GB" | "he-IL" | "hi-IN" | "id-ID" | "it-IT" | "ja-JP" | "ko-KR" | "ms-MY" | "nl-NL" | "pt-BR" | "pt-PT" | "ru-RU" | "ta-IN" | "te-IN" | "tr-TR" | "zh-CN"

export interface ClientConfig {
    accessKeyId?: string
    secretAccessKey?: string
    sessionToken?: string
}

export interface TranscribeStreamConfig {
    region: AVAILABLE_REGIONS
    languageCode: LANGUAGES
    sampleRate: number
    showSpeakerLabel?: boolean
}

export interface PresignedUrlHeaders {
    [key: string]: any
    Host: string
}

export interface PresignedUrlQuery {
    [key: string]: any
    "X-Amz-Algorithm"?: string
    "X-Amz-Credential"?: string
    "X-Amz-Date"?: string
    "X-Amz-Expires"?: number
    "X-Amz-SignedHeaders"?: string
    "X-Amz-Signature"?: string
    "X-Amz-Security-Token"?: string
}

export interface PresignedUrlOptions {
    key: string
    secret: string
    sessionToken?: string
    protocol: string
    headers?: PresignedUrlHeaders
    timestamp?: number
    region: AVAILABLE_REGIONS
    expires: number
    query: string
}

export interface AwsEventMessage {
    headers: {
        ":message-type": {
            type: string
            value: string
        }
        ":event-type": {
            type: string
            value: string
        }
    }
    body: Buffer
}

interface TranscribeItem {
    Content: string
    EndTime: number
    StartTime: number
    Type: "pronunciation" | "punctuation"
    Speaker: string
}

interface TranscribeAlternative {
    Items: TranscribeItem[]
    Transcript: string
}

interface TranscribeResult {
    Alternatives: TranscribeAlternative[]
    EndTime: number
    IsPartial: boolean
    ResultId: string
    StartTime: number
}

export interface TranscriptEvent {
    Transcript: {
        Results: TranscribeResult[]
    }
}
