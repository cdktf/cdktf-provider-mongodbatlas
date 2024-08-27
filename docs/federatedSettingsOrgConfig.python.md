# `federatedSettingsOrgConfig` Submodule <a name="`federatedSettingsOrgConfig` Submodule" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FederatedSettingsOrgConfig <a name="FederatedSettingsOrgConfig" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config mongodbatlas_federated_settings_org_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import federated_settings_org_config

federatedSettingsOrgConfig.FederatedSettingsOrgConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_restriction_enabled: typing.Union[bool, IResolvable],
  federation_settings_id: str,
  org_id: str,
  data_access_identity_provider_ids: typing.List[str] = None,
  domain_allow_list: typing.List[str] = None,
  id: str = None,
  identity_provider_id: str = None,
  post_auth_role_grants: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.domainRestrictionEnabled">domain_restriction_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#domain_restriction_enabled FederatedSettingsOrgConfig#domain_restriction_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.federationSettingsId">federation_settings_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#federation_settings_id FederatedSettingsOrgConfig#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#org_id FederatedSettingsOrgConfig#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.dataAccessIdentityProviderIds">data_access_identity_provider_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#data_access_identity_provider_ids FederatedSettingsOrgConfig#data_access_identity_provider_ids}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.domainAllowList">domain_allow_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#domain_allow_list FederatedSettingsOrgConfig#domain_allow_list}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#id FederatedSettingsOrgConfig#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#identity_provider_id FederatedSettingsOrgConfig#identity_provider_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.postAuthRoleGrants">post_auth_role_grants</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#post_auth_role_grants FederatedSettingsOrgConfig#post_auth_role_grants}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_restriction_enabled`<sup>Required</sup> <a name="domain_restriction_enabled" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.domainRestrictionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#domain_restriction_enabled FederatedSettingsOrgConfig#domain_restriction_enabled}.

---

##### `federation_settings_id`<sup>Required</sup> <a name="federation_settings_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.federationSettingsId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#federation_settings_id FederatedSettingsOrgConfig#federation_settings_id}.

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.orgId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#org_id FederatedSettingsOrgConfig#org_id}.

---

##### `data_access_identity_provider_ids`<sup>Optional</sup> <a name="data_access_identity_provider_ids" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.dataAccessIdentityProviderIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#data_access_identity_provider_ids FederatedSettingsOrgConfig#data_access_identity_provider_ids}.

---

##### `domain_allow_list`<sup>Optional</sup> <a name="domain_allow_list" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.domainAllowList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#domain_allow_list FederatedSettingsOrgConfig#domain_allow_list}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#id FederatedSettingsOrgConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.identityProviderId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#identity_provider_id FederatedSettingsOrgConfig#identity_provider_id}.

---

##### `post_auth_role_grants`<sup>Optional</sup> <a name="post_auth_role_grants" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.postAuthRoleGrants"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#post_auth_role_grants FederatedSettingsOrgConfig#post_auth_role_grants}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetDataAccessIdentityProviderIds">reset_data_access_identity_provider_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetDomainAllowList">reset_domain_allow_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetPostAuthRoleGrants">reset_post_auth_role_grants</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_data_access_identity_provider_ids` <a name="reset_data_access_identity_provider_ids" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetDataAccessIdentityProviderIds"></a>

```python
def reset_data_access_identity_provider_ids() -> None
```

##### `reset_domain_allow_list` <a name="reset_domain_allow_list" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetDomainAllowList"></a>

```python
def reset_domain_allow_list() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```

##### `reset_post_auth_role_grants` <a name="reset_post_auth_role_grants" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetPostAuthRoleGrants"></a>

```python
def reset_post_auth_role_grants() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FederatedSettingsOrgConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import federated_settings_org_config

federatedSettingsOrgConfig.FederatedSettingsOrgConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import federated_settings_org_config

federatedSettingsOrgConfig.FederatedSettingsOrgConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import federated_settings_org_config

federatedSettingsOrgConfig.FederatedSettingsOrgConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import federated_settings_org_config

federatedSettingsOrgConfig.FederatedSettingsOrgConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FederatedSettingsOrgConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FederatedSettingsOrgConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FederatedSettingsOrgConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FederatedSettingsOrgConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.userConflicts">user_conflicts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList">FederatedSettingsOrgConfigUserConflictsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.dataAccessIdentityProviderIdsInput">data_access_identity_provider_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.domainAllowListInput">domain_allow_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.domainRestrictionEnabledInput">domain_restriction_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.federationSettingsIdInput">federation_settings_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.postAuthRoleGrantsInput">post_auth_role_grants_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.dataAccessIdentityProviderIds">data_access_identity_provider_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.domainAllowList">domain_allow_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.domainRestrictionEnabled">domain_restriction_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.federationSettingsId">federation_settings_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.postAuthRoleGrants">post_auth_role_grants</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `user_conflicts`<sup>Required</sup> <a name="user_conflicts" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.userConflicts"></a>

```python
user_conflicts: FederatedSettingsOrgConfigUserConflictsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList">FederatedSettingsOrgConfigUserConflictsList</a>

---

##### `data_access_identity_provider_ids_input`<sup>Optional</sup> <a name="data_access_identity_provider_ids_input" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.dataAccessIdentityProviderIdsInput"></a>

```python
data_access_identity_provider_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_allow_list_input`<sup>Optional</sup> <a name="domain_allow_list_input" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.domainAllowListInput"></a>

```python
domain_allow_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_restriction_enabled_input`<sup>Optional</sup> <a name="domain_restriction_enabled_input" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.domainRestrictionEnabledInput"></a>

```python
domain_restriction_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `federation_settings_id_input`<sup>Optional</sup> <a name="federation_settings_id_input" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.federationSettingsIdInput"></a>

```python
federation_settings_id_input: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `post_auth_role_grants_input`<sup>Optional</sup> <a name="post_auth_role_grants_input" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.postAuthRoleGrantsInput"></a>

```python
post_auth_role_grants_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_access_identity_provider_ids`<sup>Required</sup> <a name="data_access_identity_provider_ids" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.dataAccessIdentityProviderIds"></a>

```python
data_access_identity_provider_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_allow_list`<sup>Required</sup> <a name="domain_allow_list" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.domainAllowList"></a>

```python
domain_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_restriction_enabled`<sup>Required</sup> <a name="domain_restriction_enabled" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.domainRestrictionEnabled"></a>

```python
domain_restriction_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `federation_settings_id`<sup>Required</sup> <a name="federation_settings_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.federationSettingsId"></a>

```python
federation_settings_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `post_auth_role_grants`<sup>Required</sup> <a name="post_auth_role_grants" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.postAuthRoleGrants"></a>

```python
post_auth_role_grants: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FederatedSettingsOrgConfigConfig <a name="FederatedSettingsOrgConfigConfig" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import federated_settings_org_config

federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_restriction_enabled: typing.Union[bool, IResolvable],
  federation_settings_id: str,
  org_id: str,
  data_access_identity_provider_ids: typing.List[str] = None,
  domain_allow_list: typing.List[str] = None,
  id: str = None,
  identity_provider_id: str = None,
  post_auth_role_grants: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.domainRestrictionEnabled">domain_restriction_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#domain_restriction_enabled FederatedSettingsOrgConfig#domain_restriction_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.federationSettingsId">federation_settings_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#federation_settings_id FederatedSettingsOrgConfig#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.orgId">org_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#org_id FederatedSettingsOrgConfig#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.dataAccessIdentityProviderIds">data_access_identity_provider_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#data_access_identity_provider_ids FederatedSettingsOrgConfig#data_access_identity_provider_ids}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.domainAllowList">domain_allow_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#domain_allow_list FederatedSettingsOrgConfig#domain_allow_list}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#id FederatedSettingsOrgConfig#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#identity_provider_id FederatedSettingsOrgConfig#identity_provider_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.postAuthRoleGrants">post_auth_role_grants</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#post_auth_role_grants FederatedSettingsOrgConfig#post_auth_role_grants}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_restriction_enabled`<sup>Required</sup> <a name="domain_restriction_enabled" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.domainRestrictionEnabled"></a>

```python
domain_restriction_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#domain_restriction_enabled FederatedSettingsOrgConfig#domain_restriction_enabled}.

---

##### `federation_settings_id`<sup>Required</sup> <a name="federation_settings_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.federationSettingsId"></a>

```python
federation_settings_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#federation_settings_id FederatedSettingsOrgConfig#federation_settings_id}.

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#org_id FederatedSettingsOrgConfig#org_id}.

---

##### `data_access_identity_provider_ids`<sup>Optional</sup> <a name="data_access_identity_provider_ids" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.dataAccessIdentityProviderIds"></a>

```python
data_access_identity_provider_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#data_access_identity_provider_ids FederatedSettingsOrgConfig#data_access_identity_provider_ids}.

---

##### `domain_allow_list`<sup>Optional</sup> <a name="domain_allow_list" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.domainAllowList"></a>

```python
domain_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#domain_allow_list FederatedSettingsOrgConfig#domain_allow_list}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#id FederatedSettingsOrgConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#identity_provider_id FederatedSettingsOrgConfig#identity_provider_id}.

---

##### `post_auth_role_grants`<sup>Optional</sup> <a name="post_auth_role_grants" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.postAuthRoleGrants"></a>

```python
post_auth_role_grants: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/federated_settings_org_config#post_auth_role_grants FederatedSettingsOrgConfig#post_auth_role_grants}.

---

### FederatedSettingsOrgConfigUserConflicts <a name="FederatedSettingsOrgConfigUserConflicts" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflicts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflicts.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import federated_settings_org_config

federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflicts()
```


## Classes <a name="Classes" id="Classes"></a>

### FederatedSettingsOrgConfigUserConflictsList <a name="FederatedSettingsOrgConfigUserConflictsList" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import federated_settings_org_config

federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FederatedSettingsOrgConfigUserConflictsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FederatedSettingsOrgConfigUserConflictsOutputReference <a name="FederatedSettingsOrgConfigUserConflictsOutputReference" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import federated_settings_org_config

federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.property.federationSettingsId">federation_settings_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflicts">FederatedSettingsOrgConfigUserConflicts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `federation_settings_id`<sup>Required</sup> <a name="federation_settings_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.property.federationSettingsId"></a>

```python
federation_settings_id: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflictsOutputReference.property.internalValue"></a>

```python
internal_value: FederatedSettingsOrgConfigUserConflicts
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigUserConflicts">FederatedSettingsOrgConfigUserConflicts</a>

---



