import * as exec from '@actions/exec'
import { ArgumentBuilder } from '@akiojin/argument-builder'

export default class P4
{
    static Initialize(ip: string, username: string, workspace: string)
    {
        process.env.P4PORT = ip
        process.env.P4USER = username
        process.env.P4CLIENT = workspace
    }

    static async ShowInfo(): Promise<void>
    {
        const builder = new ArgumentBuilder()
            .Append('info')

        await exec.exec('p4', builder.Build())
    }
    
    static async ShowVersion(): Promise<void>
    {
        const builder = new ArgumentBuilder()
            .Append('-V')

        await exec.exec('p4', builder.Build())
    }

    static async ShowUserInfo(): Promise<void>
    {
        const builder = new ArgumentBuilder()
            .Append('clients')

        await exec.exec('p4', builder.Build())
    }

    static async Trust(): Promise<void>
    {
        const builder = new ArgumentBuilder()
            .Append('trust', '-y')

        await exec.exec('p4', builder.Build())
    }

    static async GetLatest(password: string): Promise<void>
    {
        process.env.P4PASSWD = password;

        const builder = new ArgumentBuilder()
            .Append('sync')

        await exec.exec('p4', builder.Build())
    }
}
