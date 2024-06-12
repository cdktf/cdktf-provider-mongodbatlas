/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/third_party_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThirdPartyIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/third_party_integration#api_key ThirdPartyIntegration#api_key}
  */
  readonly apiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/third_party_integration#channel_name ThirdPartyIntegration#channel_name}
  */
  readonly channelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/third_party_integration#enabled ThirdPartyIntegration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/third_party_integration#microsoft_teams_webhook_url ThirdPartyIntegration#microsoft_teams_webhook_url}
  */
  readonly microsoftTeamsWebhookUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/third_party_integration#password ThirdPartyIntegration#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/third_party_integration#project_id ThirdPartyIntegration#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/third_party_integration#region ThirdPartyIntegration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/third_party_integration#routing_key ThirdPartyIntegration#routing_key}
  */
  readonly routingKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/third_party_integration#scheme ThirdPartyIntegration#scheme}
  */
  readonly scheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/third_party_integration#secret ThirdPartyIntegration#secret}
  */
  readonly secret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/third_party_integration#service_discovery ThirdPartyIntegration#service_discovery}
  */
  readonly serviceDiscovery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/third_party_integration#service_key ThirdPartyIntegration#service_key}
  */
  readonly serviceKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/third_party_integration#team_name ThirdPartyIntegration#team_name}
  */
  readonly teamName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/third_party_integration#type ThirdPartyIntegration#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/third_party_integration#url ThirdPartyIntegration#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/third_party_integration#user_name ThirdPartyIntegration#user_name}
  */
  readonly userName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/third_party_integration mongodbatlas_third_party_integration}
*/
export class ThirdPartyIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_third_party_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ThirdPartyIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ThirdPartyIntegration to import
  * @param importFromId The id of the existing ThirdPartyIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/third_party_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ThirdPartyIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_third_party_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/third_party_integration mongodbatlas_third_party_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThirdPartyIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: ThirdPartyIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_third_party_integration',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.17.0',
        providerVersionConstraint: '~> 1.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiKey = config.apiKey;
    this._channelName = config.channelName;
    this._enabled = config.enabled;
    this._microsoftTeamsWebhookUrl = config.microsoftTeamsWebhookUrl;
    this._password = config.password;
    this._projectId = config.projectId;
    this._region = config.region;
    this._routingKey = config.routingKey;
    this._scheme = config.scheme;
    this._secret = config.secret;
    this._serviceDiscovery = config.serviceDiscovery;
    this._serviceKey = config.serviceKey;
    this._teamName = config.teamName;
    this._type = config.type;
    this._url = config.url;
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: true, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // channel_name - computed: true, optional: true, required: false
  private _channelName?: string; 
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  public resetChannelName() {
    this._channelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // microsoft_teams_webhook_url - computed: true, optional: true, required: false
  private _microsoftTeamsWebhookUrl?: string; 
  public get microsoftTeamsWebhookUrl() {
    return this.getStringAttribute('microsoft_teams_webhook_url');
  }
  public set microsoftTeamsWebhookUrl(value: string) {
    this._microsoftTeamsWebhookUrl = value;
  }
  public resetMicrosoftTeamsWebhookUrl() {
    this._microsoftTeamsWebhookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftTeamsWebhookUrlInput() {
    return this._microsoftTeamsWebhookUrl;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // routing_key - computed: true, optional: true, required: false
  private _routingKey?: string; 
  public get routingKey() {
    return this.getStringAttribute('routing_key');
  }
  public set routingKey(value: string) {
    this._routingKey = value;
  }
  public resetRoutingKey() {
    this._routingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingKeyInput() {
    return this._routingKey;
  }

  // scheme - computed: true, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // service_discovery - computed: true, optional: true, required: false
  private _serviceDiscovery?: string; 
  public get serviceDiscovery() {
    return this.getStringAttribute('service_discovery');
  }
  public set serviceDiscovery(value: string) {
    this._serviceDiscovery = value;
  }
  public resetServiceDiscovery() {
    this._serviceDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDiscoveryInput() {
    return this._serviceDiscovery;
  }

  // service_key - computed: true, optional: true, required: false
  private _serviceKey?: string; 
  public get serviceKey() {
    return this.getStringAttribute('service_key');
  }
  public set serviceKey(value: string) {
    this._serviceKey = value;
  }
  public resetServiceKey() {
    this._serviceKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceKeyInput() {
    return this._serviceKey;
  }

  // team_name - computed: true, optional: true, required: false
  private _teamName?: string; 
  public get teamName() {
    return this.getStringAttribute('team_name');
  }
  public set teamName(value: string) {
    this._teamName = value;
  }
  public resetTeamName() {
    this._teamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamNameInput() {
    return this._teamName;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user_name - computed: true, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      channel_name: cdktf.stringToTerraform(this._channelName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      microsoft_teams_webhook_url: cdktf.stringToTerraform(this._microsoftTeamsWebhookUrl),
      password: cdktf.stringToTerraform(this._password),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      routing_key: cdktf.stringToTerraform(this._routingKey),
      scheme: cdktf.stringToTerraform(this._scheme),
      secret: cdktf.stringToTerraform(this._secret),
      service_discovery: cdktf.stringToTerraform(this._serviceDiscovery),
      service_key: cdktf.stringToTerraform(this._serviceKey),
      team_name: cdktf.stringToTerraform(this._teamName),
      type: cdktf.stringToTerraform(this._type),
      url: cdktf.stringToTerraform(this._url),
      user_name: cdktf.stringToTerraform(this._userName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channel_name: {
        value: cdktf.stringToHclTerraform(this._channelName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      microsoft_teams_webhook_url: {
        value: cdktf.stringToHclTerraform(this._microsoftTeamsWebhookUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_key: {
        value: cdktf.stringToHclTerraform(this._routingKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheme: {
        value: cdktf.stringToHclTerraform(this._scheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_discovery: {
        value: cdktf.stringToHclTerraform(this._serviceDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_key: {
        value: cdktf.stringToHclTerraform(this._serviceKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_name: {
        value: cdktf.stringToHclTerraform(this._teamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
