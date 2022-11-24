export default class P4 {
    static Initialize(ip: string, username: string, workspace: string): void;
    static ShowInfo(): Promise<void>;
    static ShowVersion(): Promise<void>;
    static ShowUserInfo(): Promise<void>;
    static Trust(): Promise<void>;
    static GetLatest(password: string): Promise<void>;
}
