/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.40.0/docs/data-sources/third_party_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasThirdPartyIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.40.0/docs/data-sources/third_party_integration#project_id DataMongodbatlasThirdPartyIntegration#project_id}
  */
  readonly projectId: string;
  /**
  * Third-party service integration identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.40.0/docs/data-sources/third_party_integration#type DataMongodbatlasThirdPartyIntegration#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.40.0/docs/data-sources/third_party_integration mongodbatlas_third_party_integration}
*/
export class DataMongodbatlasThirdPartyIntegration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_third_party_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasThirdPartyIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasThirdPartyIntegration to import
  * @param importFromId The id of the existing DataMongodbatlasThirdPartyIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.40.0/docs/data-sources/third_party_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasThirdPartyIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_third_party_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.40.0/docs/data-sources/third_party_integration mongodbatlas_third_party_integration} Data Source
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
        providerVersion: '1.40.0',
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
    this._projectId = config.projectId;
    this._type = config.type;
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

  // channel_name - computed: true, optional: false, required: false
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // microsoft_teams_webhook_url - computed: true, optional: false, required: false
  public get microsoftTeamsWebhookUrl() {
    return this.getStringAttribute('microsoft_teams_webhook_url');
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

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // routing_key - computed: true, optional: false, required: false
  public get routingKey() {
    return this.getStringAttribute('routing_key');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // send_collection_latency_metrics - computed: true, optional: false, required: false
  public get sendCollectionLatencyMetrics() {
    return this.getBooleanAttribute('send_collection_latency_metrics');
  }

  // send_database_metrics - computed: true, optional: false, required: false
  public get sendDatabaseMetrics() {
    return this.getBooleanAttribute('send_database_metrics');
  }

  // send_user_provided_resource_tags - computed: true, optional: false, required: false
  public get sendUserProvidedResourceTags() {
    return this.getBooleanAttribute('send_user_provided_resource_tags');
  }

  // service_discovery - computed: true, optional: false, required: false
  public get serviceDiscovery() {
    return this.getStringAttribute('service_discovery');
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

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
