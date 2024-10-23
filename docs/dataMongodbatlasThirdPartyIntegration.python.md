# `dataMongodbatlasThirdPartyIntegration` Submodule <a name="`dataMongodbatlasThirdPartyIntegration` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasThirdPartyIntegration <a name="DataMongodbatlasThirdPartyIntegration" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/third_party_integration mongodbatlas_third_party_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_third_party_integration

dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  type: str,
  enabled: typing.Union[bool, IResolvable] = None,
  microsoft_teams_webhook_url: str = None,
  service_discovery: str = None,
  user_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/third_party_integration#project_id DataMongodbatlasThirdPartyIntegration#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.type">type</a></code> | <code>str</code> | Third-party service integration identifier. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/third_party_integration#enabled DataMongodbatlasThirdPartyIntegration#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.microsoftTeamsWebhookUrl">microsoft_teams_webhook_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/third_party_integration#microsoft_teams_webhook_url DataMongodbatlasThirdPartyIntegration#microsoft_teams_webhook_url}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.serviceDiscovery">service_discovery</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/third_party_integration#service_discovery DataMongodbatlasThirdPartyIntegration#service_discovery}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/third_party_integration#user_name DataMongodbatlasThirdPartyIntegration#user_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/third_party_integration#project_id DataMongodbatlasThirdPartyIntegration#project_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.type"></a>

- *Type:* str

Third-party service integration identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/third_party_integration#type DataMongodbatlasThirdPartyIntegration#type}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/third_party_integration#enabled DataMongodbatlasThirdPartyIntegration#enabled}.

---

##### `microsoft_teams_webhook_url`<sup>Optional</sup> <a name="microsoft_teams_webhook_url" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.microsoftTeamsWebhookUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/third_party_integration#microsoft_teams_webhook_url DataMongodbatlasThirdPartyIntegration#microsoft_teams_webhook_url}.

---

##### `service_discovery`<sup>Optional</sup> <a name="service_discovery" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.serviceDiscovery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/third_party_integration#service_discovery DataMongodbatlasThirdPartyIntegration#service_discovery}.

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/third_party_integration#user_name DataMongodbatlasThirdPartyIntegration#user_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.resetMicrosoftTeamsWebhookUrl">reset_microsoft_teams_webhook_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.resetServiceDiscovery">reset_service_discovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.resetUserName">reset_user_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_microsoft_teams_webhook_url` <a name="reset_microsoft_teams_webhook_url" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.resetMicrosoftTeamsWebhookUrl"></a>

```python
def reset_microsoft_teams_webhook_url() -> None
```

##### `reset_service_discovery` <a name="reset_service_discovery" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.resetServiceDiscovery"></a>

```python
def reset_service_discovery() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.resetUserName"></a>

```python
def reset_user_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataMongodbatlasThirdPartyIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_third_party_integration

dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_third_party_integration

dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_third_party_integration

dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_third_party_integration

dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataMongodbatlasThirdPartyIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataMongodbatlasThirdPartyIntegration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataMongodbatlasThirdPartyIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/third_party_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasThirdPartyIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.channelName">channel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.routingKey">routing_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.serviceKey">service_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.teamName">team_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.microsoftTeamsWebhookUrlInput">microsoft_teams_webhook_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.serviceDiscoveryInput">service_discovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.microsoftTeamsWebhookUrl">microsoft_teams_webhook_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.serviceDiscovery">service_discovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.userName">user_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `routing_key`<sup>Required</sup> <a name="routing_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.routingKey"></a>

```python
routing_key: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `service_key`<sup>Required</sup> <a name="service_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.serviceKey"></a>

```python
service_key: str
```

- *Type:* str

---

##### `team_name`<sup>Required</sup> <a name="team_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.teamName"></a>

```python
team_name: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `microsoft_teams_webhook_url_input`<sup>Optional</sup> <a name="microsoft_teams_webhook_url_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.microsoftTeamsWebhookUrlInput"></a>

```python
microsoft_teams_webhook_url_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `service_discovery_input`<sup>Optional</sup> <a name="service_discovery_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.serviceDiscoveryInput"></a>

```python
service_discovery_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `microsoft_teams_webhook_url`<sup>Required</sup> <a name="microsoft_teams_webhook_url" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.microsoftTeamsWebhookUrl"></a>

```python
microsoft_teams_webhook_url: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `service_discovery`<sup>Required</sup> <a name="service_discovery" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.serviceDiscovery"></a>

```python
service_discovery: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasThirdPartyIntegrationConfig <a name="DataMongodbatlasThirdPartyIntegrationConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_third_party_integration

dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  type: str,
  enabled: typing.Union[bool, IResolvable] = None,
  microsoft_teams_webhook_url: str = None,
  service_discovery: str = None,
  user_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/third_party_integration#project_id DataMongodbatlasThirdPartyIntegration#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.type">type</a></code> | <code>str</code> | Third-party service integration identifier. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/third_party_integration#enabled DataMongodbatlasThirdPartyIntegration#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.microsoftTeamsWebhookUrl">microsoft_teams_webhook_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/third_party_integration#microsoft_teams_webhook_url DataMongodbatlasThirdPartyIntegration#microsoft_teams_webhook_url}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.serviceDiscovery">service_discovery</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/third_party_integration#service_discovery DataMongodbatlasThirdPartyIntegration#service_discovery}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/third_party_integration#user_name DataMongodbatlasThirdPartyIntegration#user_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/third_party_integration#project_id DataMongodbatlasThirdPartyIntegration#project_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Third-party service integration identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/third_party_integration#type DataMongodbatlasThirdPartyIntegration#type}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/third_party_integration#enabled DataMongodbatlasThirdPartyIntegration#enabled}.

---

##### `microsoft_teams_webhook_url`<sup>Optional</sup> <a name="microsoft_teams_webhook_url" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.microsoftTeamsWebhookUrl"></a>

```python
microsoft_teams_webhook_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/third_party_integration#microsoft_teams_webhook_url DataMongodbatlasThirdPartyIntegration#microsoft_teams_webhook_url}.

---

##### `service_discovery`<sup>Optional</sup> <a name="service_discovery" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.serviceDiscovery"></a>

```python
service_discovery: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/third_party_integration#service_discovery DataMongodbatlasThirdPartyIntegration#service_discovery}.

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/third_party_integration#user_name DataMongodbatlasThirdPartyIntegration#user_name}.

---



