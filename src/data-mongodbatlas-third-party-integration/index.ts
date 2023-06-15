/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/third_party_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasThirdPartyIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/third_party_integration#enabled DataMongodbatlasThirdPartyIntegration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/third_party_integration#id DataMongodbatlasThirdPartyIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/third_party_integration#microsoft_teams_webhook_url DataMongodbatlasThirdPartyIntegration#microsoft_teams_webhook_url}
  */
  readonly microsoftTeamsWebhookUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/third_party_integration#project_id DataMongodbatlasThirdPartyIntegration#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/third_party_integration#scheme DataMongodbatlasThirdPartyIntegration#scheme}
  */
  readonly scheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/third_party_integration#service_discovery DataMongodbatlasThirdPartyIntegration#service_discovery}
  */
  readonly serviceDiscovery?: string;
  /**
  * Third-party service integration identifier
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/third_party_integration#type DataMongodbatlasThirdPartyIntegration#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/third_party_integration#user_name DataMongodbatlasThirdPartyIntegration#user_name}
  */
  readonly userName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/third_party_integration mongodbatlas_third_party_integration}
*/
export class DataMongodbatlasThirdPartyIntegration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_third_party_integration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/third_party_integration mongodbatlas_third_party_integration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasThirdPartyIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasThirdPartyIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_third_party_integration',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.9.0',
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._microsoftTeamsWebhookUrl = config.microsoftTeamsWebhookUrl;
    this._projectId = config.projectId;
    this._scheme = config.scheme;
    this._serviceDiscovery = config.serviceDiscovery;
    this._type = config.type;
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // api_token - computed: true, optional: false, required: false
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }

  // channel_name - computed: true, optional: false, required: false
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }

  // enabled - computed: false, optional: true, required: false
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

  // flow_name - computed: true, optional: false, required: false
  public get flowName() {
    return this.getStringAttribute('flow_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // license_key - computed: true, optional: false, required: false
  public get licenseKey() {
    return this.getStringAttribute('license_key');
  }

  // microsoft_teams_webhook_url - computed: false, optional: true, required: false
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

  // org_name - computed: true, optional: false, required: false
  public get orgName() {
    return this.getStringAttribute('org_name');
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

  // read_token - computed: true, optional: false, required: false
  public get readToken() {
    return this.getStringAttribute('read_token');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // routing_key - computed: true, optional: false, required: false
  public get routingKey() {
    return this.getStringAttribute('routing_key');
  }

  // scheme - computed: false, optional: true, required: false
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

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // service_discovery - computed: false, optional: true, required: false
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

  // service_key - computed: true, optional: false, required: false
  public get serviceKey() {
    return this.getStringAttribute('service_key');
  }

  // team_name - computed: true, optional: false, required: false
  public get teamName() {
    return this.getStringAttribute('team_name');
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // user_name - computed: false, optional: true, required: false
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

  // write_token - computed: true, optional: false, required: false
  public get writeToken() {
    return this.getStringAttribute('write_token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      microsoft_teams_webhook_url: cdktf.stringToTerraform(this._microsoftTeamsWebhookUrl),
      project_id: cdktf.stringToTerraform(this._projectId),
      scheme: cdktf.stringToTerraform(this._scheme),
      service_discovery: cdktf.stringToTerraform(this._serviceDiscovery),
      type: cdktf.stringToTerraform(this._type),
      user_name: cdktf.stringToTerraform(this._userName),
    };
  }
}
